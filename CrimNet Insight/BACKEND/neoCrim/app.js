const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const neo4j = require('neo4j-driver');
const e = require('express');

// connect sa bazom
const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'acavrbaCrim'));
const session = driver.session();
const session1 = driver.session();

module.exports = { driver, session };

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

app.get('/api/baza', async (req, res) => {
  try {
    const result = await session.run(`MATCH (n) WHERE NOT n:User OPTIONAL MATCH (n)-[r]->(m) RETURN 
                                      collect(DISTINCT {id: CASE WHEN n:Kriminalac THEN n.jmbg ELSE ID(n) END,
                                                        type: head(labels(n)),
                                                        atr1: coalesce(n[keys(n)[1]], null),
                                                        atr2: coalesce(n[keys(n)[2]], null),
                                                        atr3: coalesce(n[keys(n)[3]], null)}) AS nodes, 
                                      collect(DISTINCT {from: CASE WHEN n:Kriminalac THEN n.jmbg ELSE ID(n) END, to: CASE WHEN m:Kriminalac THEN m.jmbg ELSE ID(m) END, label: type(r)}) AS edges`);
                                      // slozeniji upit jer Kriminalac ide preko jmbg-a a ostali preko id-a
                                      // izvlacenje 3 atributa svakog cvora
                                      // type zbog boje na grafu :)
                                      // ID(n) iz bazu jer moze da se ponavlja isti lokalni id (vozilo id = 1 i inicdent id = 1)
    const nodes = result.records[0].get('nodes');
    const edges = result.records[0].get('edges');

    console.log('Result from Neo4j:', result);

    const response = {
      nodes: nodes.map(node => ({
        id: node.id.toString(),
        label: node.atr1 + " [" + node.atr2 + "]" + "\n" + node.atr3 + "\n" + node.type, // + "\n" +`Čvor ${node.id}`
        title: node.type
      })),
      edges: edges.length > 0 
      ? edges
          .filter(edge => edge.from && edge.to)
          .map(edge => ({
            from: edge.from.low !== undefined ? edge.from.low.toString() : edge.from,
            to: edge.to.low !== undefined ? edge.to.low.toString() : edge.to,
            label: edge.label || ""
          }))
      : edges
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching data from Neo4j:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});


// Ruta za aktere (kriminalce)
app.get('/api/akteri', async (req, res) => {
  try {
    const result = await session.run(`MATCH (n:Kriminalac) OPTIONAL MATCH (n)-[r]->(m:Kriminalac) RETURN 
                                      collect({jmbg: n.jmbg, pseudonim: n.pseudonim, ime: n.ime, godine: n.godine, status: n.status, type: head(labels(n))}) AS nodes, 
                                      collect({from: n.jmbg, to: m.jmbg, label: type(r)}) AS edges;`);
    const nodes = result.records[0].get('nodes');
    const edges = result.records[0].get('edges');

    console.log('Result from Neo4j:', result);

    console.log("Edges from Neo4j:", edges);


    const response = {
      nodes: nodes.map(node => ({
        id: node.jmbg,
        label: node.pseudonim + ' [' + node.ime + ', ' + node.godine + ']' + '\n' + node.status || `Čvor ${node.jmbg}`,
        title: node.type
      })),
      edges: edges.length > 0 
      ? edges
            .filter(edge => edge.from && edge.to)
            .map(edge => ({
              from: edge.from,
              to: edge.to,
              label: edge.label || ""
      }))
      : edges
    };
    console.log("REZ from Neo4j:", response);
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
                                      collect({id: v.id, registracija: v.registracija, type: head(labels(v))}) AS nodes, 
                                      collect({from: v.id, to: m.id, label: type(r)}) AS edges;`);
    const nodes = result.records[0].get('nodes');
    const edges = result.records[0].get('edges');

    console.log('Result from Neo4j:', result);

    const response = {
      nodes: nodes.map(node => ({
        id: node.id.toString(),
        label: node.registracija || `Čvor ${node.id}`,
        title: node.type
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
                                      collect({id: i.id, tip: i.tip, datum: i.datum, opis: i.opis, type: head(labels(i))}) AS nodes, 
                                      collect({from: i.id, to: m.id, label: type(r)}) AS edges;`);
    const nodes = result.records[0].get('nodes');
    const edges = result.records[0].get('edges');

    console.log('Result from Neo4j:', result);

    const response = {
      nodes: nodes.map(node => ({
        id: node.id.toString(),
        label: node.tip + '\n' + node.datum || `Čvor ${node.id}`,
        title: node.type
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
                                      collect({id: l.id, naziv: l.naziv, grad: l.grad, drzava: l.drzava, type: head(labels(l))}) AS nodes, 
                                      collect({from: l.id, to: m.id, label: type(r)}) AS edges;`);
    const nodes = result.records[0].get('nodes');
    const edges = result.records[0].get('edges');

    console.log('Result from Neo4j:', result);

    const response = {
      nodes: nodes.map(node => ({
        id: node.id.toString(),
        label: node.naziv + '\n' + node.grad + ', ' + node.drzava || `Čvor ${node.id}`,
        title: node.type
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

  console.log(nodeData);
  if (nodeData.Id) {
    nodeData.Id = Number(nodeData.Id);
  
    if (isNaN(nodeData.Id)) {
      return res.status(400).json({ message: 'Id mora biti validan broj.' });
    }
  }

  if (nodeData.Jmbg) {
    if (nodeData.Jmbg.length !== 13 || isNaN(nodeData.Jmbg)) {
      return res.status(400).json({ message: 'JMBG mora biti broj i imati tačno 13 cifara.' });
    }
    if (isNaN(nodeData.Godine) || nodeData.Godine < 5 || nodeData.Godine > 135) {
      return res.status(400).json({ message: 'Godine moraju biti validan broj. [5-135]' });
    }
  }

  if (!nodeData) {
    return res.status(400).json({ error: 'Podaci nisu poslati.' });
  }

  console.log('Podaci koji dolaze:', req.body);

  try {
    // Kreiraj čvor u Neo4j sa podacima
    const properties = Object.entries(nodeData)
            .filter(([key]) => key !== 'type')  // Ignorišemo 'type'
            .map(([key, value]) => {
              // Ako je key 'id', konvertuj ga u broj
              if (key === 'id' && key === 'godine' && !isNaN(value)) {
                value = Number(value);  // Parsiraj 'id' kao broj
              }
              return `${key.charAt(0).toLowerCase() + key.slice(1)}: ${typeof value === 'number' ? value : `"${value}"`}`;
            })
            .join(', ');  // Spajamo sve u jedan string

    console.log(properties);

    const result = await session.run(`CREATE (n:${nodeData.type} {${properties}}) RETURN n`);
    // moglo je i sa MERGE gde se izbegavaju duplikati ali mi imamo CONSTRAINTS u bazi i tjt
    
    if (result.records.length > 0) {
      res.status(201).json({ message: 'Element uspešno dodat', node: result.records[0].get(0) });
      console.log("lol kako bre");
    } else {
      if(nodeData.Id)
      {
        return res.status(400).json({ message: 'Vec postoji element sa zadatim ID-em.' });
      }
      else if(nodeData.Jmbg)
      {
        const copy = await session.run(`MATCH (n:${nodeData.type} {jmbg : ${nodeData.Jmbg}}) RETURN n`);

        const existingNode = copy.records[0].get('n').properties;
        const formattedMessage = `${existingNode.Ime} [${existingNode.Pseudonim}] - ${existingNode.jmbg}`;

        console.log(formattedMessage);

        return res.status(400).json({ message: `Zadati JMBG već postoji u bazi: ${formattedMessage}` });
      }
    }
  } catch (error) {
    //res.status(500).json({ error: error.message });
    if(nodeData.Id)
      {
        return res.status(400).json({ message: 'Vec postoji element sa zadatim ID-em.' });
      }
      else if(nodeData.Jmbg)
      {
        const copy = await session1.run(`MATCH (n:${nodeData.type} {jmbg: $jmbg}) RETURN n`, { jmbg: nodeData.Jmbg });
        console.log(copy.records);

        const existingNode = copy.records[0].get('n').properties;
        const formattedMessage = `${existingNode.ime} [${existingNode.pseudonim}] - ${existingNode.jmbg}`;

        console.log(formattedMessage);

        return res.status(400).json({ message: `Zadati JMBG već postoji u bazi! \n ${formattedMessage}` });
      }
  }
});


// API za brisanje cvora iz Neo4j baze
app.delete('/api/delete-node/:id/:type/:title', async (req, res) => {
  let nodeId = null;
  let cypherQuery = null;

  console.log("paramsi: ", req.params);

  if(req.params.type !== 'Kriminalac')
  {
    nodeId = Number(req.params.id);
    if(req.params.title === 'Baza')
    {
      cypherQuery = `MATCH (n) WHERE ID(n) = $nodeId DELETE n`;
    }
    else
    {
      cypherQuery = `MATCH (n) WHERE n.id = $nodeId DELETE n`;
    }
  }
  else
  {
    nodeId = req.params.id.toString();
    cypherQuery = `MATCH (n) WHERE n.jmbg = $nodeId DELETE n`;
  }

  //console.log("nodeid: ", nodeId);

  try {
    await session.run(cypherQuery, { nodeId: nodeId });
    
    res.status(200).json({ message: 'Čvor obrisan iz Neo4j baze' });
  } catch (err) {
    console.error('Greška pri brisanju čvora:', err);
    res.status(500).json({ message: 'Greška pri brisanju čvora iz baze', error: err });
  }
});



//API za edit
app.post('/api/edit-node/:id', async (req, res) => {
  const nodeData = req.body;
  let selectedID = req.params.id;
  let query = null;
  console.log("data: ", nodeData);
  console.log("ajdi: ", selectedID);

  if (nodeData.id) {
    if (isNaN(nodeData.id)) {
      return res.status(400).json({ error: 'Id mora biti validan broj.' });
    }
  }

  if (nodeData.jmbg) {
    if (nodeData.jmbg.length !== 13 || isNaN(nodeData.jmbg)) {
      return res.status(400).json({ error: 'JMBG mora biti broj i imati tačno 13 cifara.' });
    }
  }

  if (!nodeData) {
    return res.status(400).json({ error: 'Podaci nisu poslati.' });
  }

  console.log('Podaci koji dolaze:', req.body);

  try {
    // kreiramo cvor u Neo4j sa podacima
    const properties = Object.entries(nodeData).filter(([key]) => key !== 'type').map(([key, value]) => {
    if (key === 'id' && !isNaN(value)) { value = Number(value); }
    return `n.${key} = ${typeof value === 'number' ? value : `"${value}"`}`;
  }).join(', ');  // spajamo sve u jedan string

    console.log("Prop: ", properties);

    if(nodeData.type != 'Kriminalac')
      {
        selectedID = parseInt(selectedID);
        query = `MATCH (n:${nodeData.type} {id: $selectedID}) SET ${properties} RETURN n`;
      }
      else
      {
        selectedID = selectedID.toString();
        query = `MATCH (n:${nodeData.type} {jmbg: $selectedID}) SET ${properties} RETURN n`;
      }

    const result = await session.run(query, { selectedID: selectedID, ...nodeData.properties });
    // moglo je i sa MERGE gde se izbegavaju duplikati ali mi imamo CONSTRAINTS u bazi i tjt
    console.log("REZ: ", result);
    
    if (result.records.length > 0) {
      res.status(201).json({ message: 'Element uspešno izmenjen', node: result.records[0].get(0) });
    } else {
      res.status(400).json({ error: 'Greška pri izmeni elementa.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get('/api/loadData-node', async (req, res) => {
  let id = req.query.id;
  let type = req.query.type;
  let title = req.query.title;

  console.log("type: ", type);
  console.log("id: ", id);

  if (!id || !type) {
    return res.status(400).json({ error: 'ID and type are required' });
  }

  let query = null;
  if(type == 'Kriminalac')
  {
    query = `MATCH (n:${type}) WHERE n.jmbg = $id RETURN properties(n) AS properties`;
  }
  else
  {
    if(title == 'Baza')
    {
      query = `MATCH (n:${type}) WHERE ID(n) = $id RETURN properties(n) AS properties`;
    }
    else
    {
      query = `MATCH (n:${type}) WHERE n.id = $id RETURN properties(n) AS properties`;
    }
    id = parseInt(id);
  }

  try {

    const result = await session1.run(query, { id }); // posebna sesija, ne znam zasto ali puca onako
    if (result.records.length > 0) {
      const nodeProperties = result.records[0].get("properties");
      console.log(nodeProperties);

      if(nodeProperties.godine)
      {
        nodeProperties.godine = nodeProperties.godine.low;  // ne znam zasto ali za godine vraca Integer { low: xx, high: yy }
      }

      if(title == 'Baza' && nodeProperties.id)
        {
          nodeProperties.id = nodeProperties.id.low;  // ne znam zasto ali za godine vraca Integer { low: xx, high: yy }
        }

      res.json(nodeProperties);
    } else {
      res.status(404).json({ error: 'Node not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/add-edge/:from/:to', async (req, res) => {
  console.log("kveri: ", req.query);
  console.log("Paramsovi: ", req.params);
  console.log("imeovi: ", req.body);

  let {from, to} = req.params;
  let {edgeName, type1, type2, baza} = req.body;
  let query = null;

  if(type1 == 'Kriminalac')
  {
    from = from.toString();
  }
  else
  {
    from = parseInt(from);
  }

  if(type2 == 'Kriminalac')
  {
    to = to.toString();
  }
  else
  {
    to = parseInt(to);
  }

  if(baza && type1 != 'Kriminalac' && type2 == 'Kriminalac')
  {
    query = `MATCH (n1:${type1}), (n2:${type2}) WHERE ID(n1) = $from AND n2.jmbg = $to CREATE (n1)-[:${edgeName}]->(n2) RETURN n1, n2`;
  }
  else if(baza && type1 == 'Kriminalac' && type2 != 'Kriminalac')
  {
    query = `MATCH (n1:${type1}), (n2:${type2}) WHERE n1.jmbg = $from AND ID(n2) = $to CREATE (n1)-[:${edgeName}]->(n2) RETURN n1, n2`;
  }
  else if(baza && type1 != 'Kriminalac' && type2 != 'Kriminalac')
  {
    query = `MATCH (n1:${type1}), (n2:${type2}) WHERE ID(n1) = $from AND ID(n2) = $to CREATE (n1)-[:${edgeName}]->(n2) RETURN n1, n2`;
  }
  else if(!baza && type1 != 'Kriminalac' && type2 != 'Kriminalac')
  {
    query = `MATCH (n1:${type1} {id: $from}), (n2:${type2} {id: $to}) CREATE (n1)-[:${edgeName}]->(n2) RETURN n1, n2`;
  }
  else if(!baza && type1 == 'Kriminalac' && type2 == 'Kriminalac')
  {
    query = `MATCH (n1:${type1} {jmbg: $from}), (n2:${type2} {jmbg: $to}) CREATE (n1)-[:${edgeName}]->(n2) RETURN n1, n2`;
  }

  console.log("QQQQQ: ", query);

  console.log("t1, from: ", type1);
  console.log(from);
  console.log("t2, to: ", type2);
  console.log(to)

  try {
    
    const result = await session.run(query, { from, to });

    console.log(result.records);

    if (result.records.length > 0) {
      const node1 = result.records[0].get('n1').properties;
      const node2 = result.records[0].get('n2').properties;
      return res.status(200).json({ message: 'Veza uspešno dodata.', node1, node2 });
    } else {
      return res.status(404).json({ error: 'Čvorovi nisu pronađeni u bazi.' });
    }

  } catch (error) {
    console.error('Greška prilikom dodavanja ivice:', error);
    return res.status(500).json({ error: 'Greška prilikom dodavanja ivice.' });
  }

});


// server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
