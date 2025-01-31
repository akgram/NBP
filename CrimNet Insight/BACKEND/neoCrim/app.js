const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { session } = require('./db');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'none'; img-src 'self' data:;");
  next();
});

// Ruta za login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  try {
    // Cypher query za proveru korisnika
    const result = await session.run(
      `MATCH (u:User {username: $username, password: $password}) RETURN u`,
      { username, password }
    );

    // Provera rezultata
    if (result.records.length > 0) {
      res.status(200).json({ message: 'Login successful.' });
    } else {
      res.status(401).json({ message: 'Invalid username or password.' });
    }
  } catch (error) {
    console.error('Error querying Neo4j:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Ruta za aktere (kriminalce)
app.get('/api/akteri', async (req, res) => {
  try {
    const result = await session.run(`MATCH (n:Kriminalac) OPTIONAL MATCH (n)-[r]->(m:Kriminalac) RETURN 
                                      collect({id: id(n), pseudonim: n.pseudonim, ime: n.ime, godine: n.godine, status: n.status}) AS nodes, 
                                      collect({from: id(n), to: id(m), label: type(r)}) AS edges;`);
    const nodes = result.records[0].get('nodes');
    const edges = result.records[0].get('edges');

    console.log('Result from Neo4j:', result);

    const response = {
      nodes: nodes.map(node => ({
        id: node.id.toString(),
        label: node.pseudonim + ' [' + node.ime + ', ' + node.godine + ']' + '\n' + node.status || `Čvor ${node.id}`
      })),
      edges: edges.length > 0 
      ? edges
              .filter(edge => edge.from && edge.to && edge.from.low !== undefined && edge.to.low !== undefined)
              .map(edge => ({
                from: edge.from.low.toString(),
                to: edge.to.low.toString(),
                label: edge.label || ""
      }))
      : edges
    };
    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching akteri:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Ruta za vozila
app.get('/api/vozila', async (req, res) => {
  try {
    const result = await session.run(`MATCH (v:Vozilo) OPTIONAL MATCH (v)-[r]->(m:Vozilo) RETURN 
                                      collect({id: id(v), registracija: v.registracija}) AS nodes, 
                                      collect({from: id(v), to: id(m), label: type(r)}) AS edges;`);
    const nodes = result.records[0].get('nodes');
    const edges = result.records[0].get('edges');

    console.log('Result from Neo4j:', result);

    const response = {
      nodes: nodes.map(node => ({
        id: node.id.toString(),
        label: node.registracija || `Čvor ${node.id}`
      })),
      edges: edges.length > 0 
        ? edges
            .filter(edge => edge.from && edge.to && edge.from.low !== undefined && edge.to.low !== undefined)
            .map(edge => ({
              from: edge.from.low.toString(),
              to: edge.to.low.toString(),
              label: edge.label || ""
            }))
        : edges
    };    
    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching vozila:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Ruta za incidente
app.get('/api/incidenti', async (req, res) => {
  try {
    const result = await session.run(`MATCH (i:Incident) OPTIONAL MATCH (i)-[r]->(m:Incident) RETURN 
                                      collect({id: id(i), tip: i.tip, datum: i.datum, opis: i.opis}) AS nodes, 
                                      collect({from: id(i), to: id(m), label: type(r)}) AS edges;`);
    const nodes = result.records[0].get('nodes');
    const edges = result.records[0].get('edges');

    console.log('Result from Neo4j:', result);

    const response = {
      nodes: nodes.map(node => ({
        id: node.id.toString(),
        label: node.tip + '\n' + node.datum || `Čvor ${node.id}`
      })),
      edges: edges.length > 0 
        ? edges
            .filter(edge => edge.from && edge.to && edge.from.low !== undefined && edge.to.low !== undefined)
            .map(edge => ({
              from: edge.from.low.toString(),
              to: edge.to.low.toString(),
              label: edge.label || ""
            }))
        : edges
    };    
    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching incidenti:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Ruta za lokacije
app.get('/api/lokacije', async (req, res) => {
  try {
    const result = await session.run(`MATCH (l:Lokacija) OPTIONAL MATCH (l)-[r]->(m:Lokacija) RETURN 
                                      collect({id: id(l), ime: l.ime, grad: l.grad, drzava: l.drzava}) AS nodes, 
                                      collect({from: id(l), to: id(m), label: type(r)}) AS edges;`);
    const nodes = result.records[0].get('nodes');
    const edges = result.records[0].get('edges');

    console.log('Result from Neo4j:', result);

    const response = {
      nodes: nodes.map(node => ({
        id: node.id.toString(),
        label: node.ime + '\n' + node.grad + ', ' + node.drzava || `Čvor ${node.id}`
      })),
      edges: edges.length > 0 
        ? edges
            .filter(edge => edge.from && edge.to && edge.from.low !== undefined && edge.to.low !== undefined)
            .map(edge => ({
              from: edge.from.low.toString(),
              to: edge.to.low.toString(),
              label: edge.label || ""
            }))
        : edges
    };    
    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching lokacije:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});


app.get('/api/node-types', async (req, res) => {
  try {
    const result = await session.run(`CALL db.labels() YIELD label WHERE label <> 'User' RETURN label`);

    const types = result.records.map(record => record.get('label'));
    res.json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/node-types/attributes', async (req, res) => {
  const { type } = req.query; // Uzmi 'type' iz query string-a

  if (!type) {
    return res.status(400).json({ error: 'Tip je obavezan.' });
  }

  try {
    console.log("try");
    const result = await session.run(`MATCH (n:${type}) LIMIT 1 RETURN keys(n) AS attributes`);

    if (result.records.length > 0) {
      const attributes = result.records[0].get('attributes');
      console.log(attributes);
      res.json(attributes); // Vrati atribute kao JSON
    } else {
      res.status(404).json({ error: 'Tip nije pronađen u bazi.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API endpoint za dodavanje elementa
app.post('/api/add-node', async (req, res) => {
  const nodeData = req.body;  // Podaci dobijeni iz klijenta

  if (!nodeData) {
    return res.status(400).json({ error: 'Podaci nisu poslati.' });
  }

  console.log('Podaci koji dolaze:', req.body);

  try {
    // Kreiraj čvor u Neo4j sa podacima
    const properties = Object.entries(nodeData)
  .filter(([key]) => key !== 'type')  // Ignorišemo 'type'
  .map(([key, value]) => `${key.charAt(0).toLowerCase() + key.slice(1)}: "${value}"`)  // Pretvaramo u string sa malim prvim slovom
  .join(', ');  // Spajamo sve u jedan string

    const result = await session.run(`CREATE (n:${nodeData.type} {${properties}}) RETURN n`);
    
    if (result.records.length > 0) {
      res.status(201).json({ message: 'Element uspešno dodat', node: result.records[0].get(0) });
    } else {
      res.status(400).json({ error: 'Greška pri dodavanju elementa.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Pokretanje servera
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
