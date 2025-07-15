const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const neo4j = require('neo4j-driver');
const e = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');


// connect sa bazom neo4j
const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'acavrbaCrim'));
const session = driver.session();
const session1 = driver.session();

module.exports = { driver, session };

const app = express();
const PORT = 3000;
console.log('UPLOADS FOLDER:', path.join(__dirname, 'uploads'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// connect sa bazom mongo
const uri = 'mongodb://localhost:27017/admin';
mongoose.connect(uri, {}).catch((err) => {console.error('Greska pri konekciji sa mongoDB:', err);});


app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'none'; img-src 'self' data:;");
  next();
});

// konfiguracija multer-a za upload slike
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads')); // apsolutna putanju
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage: storage });

// Ruta za login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  try {
    const result = await session.run(
      `MATCH (u:User {username: $username, password: $password}) RETURN u`,
      { username, password }
    );

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

////////////////////////////////MONGO (seme i modeli)
const DosijeSchema = new mongoose.Schema({
  jmbg: String,
  dosije: String,
  opasnost: String,
  dosijeId: String,
  slika: String,
});

const OpisVozilaSchema = new mongoose.Schema({
  id: Number,
  opisVozilaId: String,
  opis: String,
  slika: String,
});

const TokDesavanjaSchema = new mongoose.Schema({
  id: Number,
  tokDesavanjaId: String,
  tok: String,
  slika: String,
});

const OpisLokacijeSchema = new mongoose.Schema({
  id: Number,
  opisLokacijeId: String,
  opis: String,
  slika: String,
});

const Dosije = mongoose.model('Dosije', DosijeSchema, 'dosijei'); // kolekcija: dosijei

const OpisVozila = mongoose.model('OpisVozila', OpisVozilaSchema, 'opisi_vozila');

const TokDesavanja = mongoose.model('TokDesavanja', TokDesavanjaSchema, 'tokovi_desavanja');

const OpisLokacije = mongoose.model('OpisLokacije', OpisLokacijeSchema, 'opisi_lokacija');

// GET /api/mongo
app.get('/api/mongo/:id/:type', async (req, res) => {
  const selectedId = req.params.id;
  const selectedType = req.params.type;
  console.log(selectedId);
  console.log(selectedType);

  try {
    if(selectedType == "Kriminalac")
    {
      const dosije = await Dosije.findOne({ jmbg: selectedId });

      if (!dosije) {
        res.status(200).json({
          jmbg: selectedId,
          dosijeId: '',
          dosije: '',
          slika: '',
        });
        return;
      }

      res.status(200).json({
        jmbg: dosije.jmbg,
        dosijeId: dosije.dosijeId,
        dosije: dosije.dosije,
        slika: dosije.slika
      });
    }
    else if (selectedType == "Vozilo")
    {
      const opisVozila = await OpisVozila.findOne({ id: selectedId });

      if (!opisVozila) {
        res.status(200).json({
          id: selectedId,
          opisVozilaId: '',
          opis: '',
          slika: '',
        });
        return;
      }

      res.status(200).json({
        id: opisVozila.id,
        opisVozilaId: opisVozila.opisVozilaId,
        opis: opisVozila.opis,
        slika: opisVozila.slika
      });
    }
    else if (selectedType == "Incident")
    {
      const tokDesavanja = await TokDesavanja.findOne({ id: selectedId });

      if (!tokDesavanja) {
        res.status(200).json({
          id: selectedId,
          tokDesavanjaId: '',
          tok: '',
          slika: '',
        });
        return;
      }

      res.status(200).json({
        id: tokDesavanja.id,
        tokDesavanjaId: tokDesavanja.tokDesavanjaId,
        tok: tokDesavanja.tok,
        slika: tokDesavanja.slika
      });
    }
    else if (selectedType == "Lokacija") 
    {
      const opisLokacije = await OpisLokacije.findOne({ id: selectedId });

      if (!opisLokacije) {
        res.status(200).json({
          id: selectedId,
          opisLokacijeId: '',
          opis: '',
          slika: '',
        });
        return;
      }

      res.status(200).json({
        id: opisLokacije.id,
        opisLokacijeId: opisLokacije.opisLokacijeId,
        opis: opisLokacije.opis,
        slika: opisLokacije.slika
      });
    }
  } catch (error) {
    console.error('Greška pri dohvatanju dosijea iz MongoDB:', error);
    res.status(500).json({ message: 'Greška na serveru.' });
  }
});


// POST /api/mongo
app.post('/api/mongoSave', upload.single('slika'), async (req, res) => {
  const { id, type, opis} = req.body;
  const slika = req.file ? req.file.filename : null;
  console.log('Primljen fajl:', req.file);

  console.log('id, type, opis: ', id, type, opis);
  console.log('slika: ', slika);

  try {
    if (type === "Kriminalac") {
      const poslednji = await Dosije.findOne().sort({ dosijeId: -1 });

      let noviBroj = 1;
      if (poslednji && poslednji.dosijeId) {
        const broj = parseInt(poslednji.dosijeId.split('-')[1], 10);
        noviBroj = broj + 1;
      }
      const dosijeId = `DSJ-${String(noviBroj).padStart(3, '0')}`;

      const dosije = new Dosije({
        jmbg: id,
        dosijeId: dosijeId,
        dosije: opis,
        slika: slika
      });
      await dosije.save();
    } else if (type === "Vozilo") {
      const poslednji = await OpisVozila.findOne().sort({ opisVozilaId: -1 });

      let noviBroj = 1;
      if (poslednji && poslednji.opisVozilaId) {
        const broj = parseInt(poslednji.opisVozilaId.split('-')[1], 10);
        noviBroj = broj + 1;
      }
      const opisVozilaId = `OV-${String(noviBroj).padStart(3, '0')}`;

      const opisVozila = new OpisVozila({
        id,
        opisVozilaId: opisVozilaId,
        opis,
        slika: slika
      });
      await opisVozila.save();
    } else if (type === "Incident") {
      const poslednji = await TokDesavanja.findOne().sort({ tokDesavanjaId: -1 });

      let noviBroj = 1;
      if (poslednji && poslednji.tokDesavanjaId) {
        const broj = parseInt(poslednji.tokDesavanjaId.split('-')[1], 10);
        noviBroj = broj + 1;
      }
      const tokDesavanjaId = `TD-${String(noviBroj).padStart(3, '0')}`;

      const tokDesavanja = new TokDesavanja({
        id,
        tokDesavanjaId: tokDesavanjaId,
        tok: opis,
        slika: slika
      });
      await tokDesavanja.save();
    } else if (type === "Lokacija") {
      const poslednji = await OpisLokacije.findOne().sort({ opisLokacijeId: -1 });

      let noviBroj = 1;
      if (poslednji && poslednji.opisLokacijeId) {
        const broj = parseInt(poslednji.opisLokacijeId.split('-')[1], 10);
        noviBroj = broj + 1;
      }
      const opisLokacijeId = `OL-${String(noviBroj).padStart(3, '0')}`;

      const opisLokacije = new OpisLokacije({
        id,
        opisLokacijeId: opisLokacijeId,
        opis,
        slika: slika
      });
      await opisLokacije.save();
    } else {
      return res.status(400).json({ message: "Nepoznat tip" });
    }

    res.status(200).json({ message: "Uspešno sačuvano", nazivSlike: slika });

  } catch (error) {
    console.error('Greška pri snimanju:', error);
    res.status(500).json({ message: 'Greška na serveru.' });
  }
});

// PUT /api/mongoEdit
app.put('/api/mongoEdit', upload.single('slika'), async (req, res) => {
  const { id, type, opis} = req.body;
  const staraSlika = req.body.staraSlika; // ime fajla ako nema nove slike
  const novaSlika = req.file ? req.file.filename : null;

// koristi ili novu sliku (ako postoji), ili staru (iz body)
const slika = novaSlika || staraSlika;

  console.log('id, type, opis: ', id, type, opis);
  console.log('slika: ', slika);

  try {
    if (type === "Kriminalac") {
      const updated = await Dosije.findOneAndUpdate( { jmbg: id },
        { dosije: opis, slika: slika },
        { new: true }
      );

      if (!updated) 
        return res.status(404).json({ message: "Dosije nije pronađen." });
    }
     else if (type === "Vozilo") {
      const updated = await OpisVozila.findOneAndUpdate( { id: id },
        { opis: opis, slika: slika },
        { new: true }
      );

      if (!updated) 
        return res.status(404).json({ message: "Opis nije pronađen." });
    } 
    else if (type === "Incident") {
      const updated = await TokDesavanja.findOneAndUpdate( { id: id },
        { tok: opis, slika: slika },
        { new: true }
      );

      if (!updated) 
        return res.status(404).json({ message: "Opis nije pronađen." });
    } 
    else if (type === "Lokacija") {
      const updated = await OpisLokacije.findOneAndUpdate( { id: id },
        { opis: opis, slika: slika },
        { new: true }
      );

      if (!updated) 
        return res.status(404).json({ message: "Opis nije pronađen." });
    } 
    else {
      return res.status(400).json({ message: "Nepoznat tip" });
    }

    return res.status(200).json({ message: "Uspešno izmenjeno." });

  } 
  catch (error) {
    console.error('Greška pri snimanju:', error);
    res.status(500).json({ message: 'Greška na serveru.' });
  }
});

app.delete(`/api/mongoDel/:id/:type`, async(req, res) => {
  const {id, type} = req.params;
  console.log("id: ", id);
  console.log("type: ", type);

  try{
    if (type === "Kriminalac")
    {
      const dosije = await Dosije.findOneAndDelete({ jmbg: id });

      if(!dosije)
        return res.status(404).json({ message: "Dosije za brisanje nije pronađen." });
    }
    else if (type === "Vozilo")
    {
      const opisVozila = await OpisVozila.findOneAndDelete({ id: id });

      if(!opisVozila)
        return res.status(404).json({ message: "Opis vozila za brisanje nije pronađen." });
    }
    else if (type === "Incident")
    {
      const tokDesavanja = await TokDesavanja.findOneAndDelete({ id: id });

      if(!tokDesavanja)
        return res.status(404).json({ message: "Tok desavanja za brisanje nije pronađen." });
    }
    else if (type === "Lokacija")
    {
      const opisLokacije = await OpisLokacije.findOneAndDelete({ id: id });

      if(!opisLokacije)
        return res.status(404).json({ message: "Opis lokacije za brisanje nije pronađen." });
    }

    return res.status(200).json({ message: "Uspešno obrisano." });
  }
  catch(error) {
    console.error("Greška pri brisanju: ", error);
    res.status(500).json({ message: 'Greška na serveru.'});
  }
});

/////////////////////////////////NEO4J
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
              if ((key === 'id' || key === 'godine') && !isNaN(value)) {
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
      cypherQuery = `MATCH (n) WHERE ID(n) = $nodeId OPTIONAL MATCH (n)-[r]-() DELETE r, n`;
    }
    else
    {
      cypherQuery = `MATCH (n) WHERE n.id = $nodeId OPTIONAL MATCH (n)-[r]-() DELETE r, n`;
    }
  }
  else
  {
    nodeId = req.params.id.toString();
    cypherQuery = `MATCH (n) WHERE n.jmbg = $nodeId OPTIONAL MATCH (n)-[r]-() DELETE r, n`;
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
      return res.status(400).json({ message: 'Id mora biti validan broj.' });
    }
  }

  if (nodeData.jmbg) {
    if (nodeData.jmbg.length !== 13 || isNaN(nodeData.jmbg)) {
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
    // kreiramo cvor u Neo4j sa podacima
    const properties = Object.entries(nodeData).filter(([key]) => key !== 'type').map(([key, value]) => {
    if ((key === 'id' || key === 'godine') && !isNaN(value)) { value = Number(value); }
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

app.delete('/api/delete-edge/:sourceNodeId/:sourceNodeType/:targetNodeId/:targetNodeType/:title', async (req, res) => {

  let sourceNodeId = req.params.sourceNodeId;
  let targetNodeId = req.params.targetNodeId;
  let title = req.params.title;
  let sourceNodeType = req.params.sourceNodeType;
  let targetNodeType = req.params.targetNodeType;
  let cypherQuery = null;

  console.log("paramsi: ", req.params);

  if(title === 'Kriminalac') // title = Kriminalac
  {
    sourceNodeId = sourceNodeId.toString();
    targetNodeId = targetNodeId.toString();
    cypherQuery = `MATCH (n1:Kriminalac {jmbg: $sourceNodeId})-[r]->(n2:Kriminalac {jmbg: $targetNodeId}) DELETE r`;
  }
  else if(title !== 'Baza') // title = Vozilo || Lokacija || Incident
  {
    sourceNodeId = parseInt(sourceNodeId);
    targetNodeId = parseInt(targetNodeId);
    cypherQuery = `MATCH (n1:${title} {id: $sourceNodeId})-[r]->(n2:${title} {id: $targetNodeId}) DELETE r`;
  }
  else if(sourceNodeType === 'Kriminalac' && targetNodeType !== 'Kriminalac') // title = Baza i brise se veza izmedju Kriminalca i nekog drugog
  {
    sourceNodeId = sourceNodeId.toString();
    targetNodeId = parseInt(targetNodeId);
    cypherQuery = `MATCH (n1)-[r]->(n2) WHERE n1.jmbg = $sourceNodeId AND ID(n2) = $targetNodeId DELETE r`;
  }
  else if(sourceNodeType !== 'Kriminalac' && targetNodeType === 'Kriminalac') // title = Baza i brise se veza izmedju nekog prvog i Kriminalca
  {
    sourceNodeId = parseInt(sourceNodeId);
    targetNodeId = targetNodeId.toString();
    cypherQuery = `MATCH (n1)-[r]->(n2) WHERE ID(n1) = $sourceNodeId AND n2.jmbg = $targetNodeId DELETE r`;
  }
  else if(sourceNodeType !== 'Kriminalac' && targetNodeType !== 'Kriminalac') // title = Baza i brise se veza izmedju nekog prvog i Kriminalca
  {
    sourceNodeId = parseInt(sourceNodeId);
    targetNodeId = parseInt(targetNodeId);
    cypherQuery = `MATCH (n1)-[r]->(n2) WHERE ID(n1) = $sourceNodeId AND ID(n2) = $targetNodeId DELETE r`;
  }

  try {
    await session.run(cypherQuery, { sourceNodeId: sourceNodeId,  targetNodeId: targetNodeId});
    
    res.status(200).json({ message: 'Veza obrisana iz baze' });
  } catch (err) {
    console.error('Greška pri brisanju veze:', err);
    res.status(500).json({ message: 'Greška pri brisanju veze iz baze', error: err });
  }
});

app.post('/api/edit-edge/:name/:sourceNodeId/:sourceNodeType/:targetNodeId/:targetNodeType/:from/:to', async (req, res) => {
  console.log("kveri: ", req.query);
  console.log("Paramsovi: ", req.params);
  console.log("imeovi: ", req.body);

  let { name, sourceNodeId, sourceNodeType, targetNodeId, targetNodeType, from, to} = req.params;
  let {type1, type2, baza} = req.body;
  let query = null;

  //STARA VEZA
  if(sourceNodeType == 'Kriminalac')
  {
    sourceNodeId = sourceNodeId.toString();
  }
  else
  {
    sourceNodeId = parseInt(sourceNodeId);
  }

  if(targetNodeType == 'Kriminalac')
  {
    targetNodeId = targetNodeId.toString();
  }
  else
  {
    targetNodeId = parseInt(targetNodeId);
  }


  //NOVA VEZA
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
  if(sourceNodeType === type1 && targetNodeType === type2)
  {
    if(sourceNodeId === from)
    {
      if(sourceNodeType === 'Kriminalac' && targetNodeType === 'Kriminalac')
      {
        query = `MATCH (n1:Kriminalac {jmbg: $sourceNodeId})-[r]->(n2:Kriminalac {jmbg: $targetNodeId}), (n3:Kriminalac {jmbg: $to})
                  WITH r, n1, n2, n3 
                  DELETE r 
                  CREATE (n1)-[:${name}]->(n3) RETURN n1, n3`;
      }
      else if(sourceNodeType === 'Kriminalac' && targetNodeType !== 'Kriminalac')
      {
        query = `MATCH (n1:Kriminalac {jmbg: $sourceNodeId})-[r]->(n2:${targetNodeType} {id: $targetNodeId}), (n3:${type2} {id: $to})
                  WITH r, n1, n2, n3
                  DELETE r 
                  CREATE (n1)-[:${name}]->(n3) RETURN n1, n3`;
      }
      else if(sourceNodeType !== 'Kriminalac' && targetNodeType === 'Kriminalac')
      {
        query = `MATCH (n1:${sourceNodeType} {id: $sourceNodeId})-[r]->(n2:Kriminalac {jmbg: $targetNodeId}), (n3:Kriminalac {jmbg: $to})
                  WITH r, n1, n2, n3
                  DELETE r 
                  CREATE (n1)-[:${name}]->(n3) RETURN n1, n3`;
      }
      else if(sourceNodeType !== 'Kriminalac' && targetNodeType !== 'Kriminalac')
      {
        query = `MATCH (n1:${sourceNodeType} {id: $sourceNodeId})-[r]->(n2:${targetNodeType} {id: $targetNodeId}), (n3:${type2} {id: $to})
                  WITH r, n1, n2, n3
                  DELETE r 
                  CREATE (n1)-[:${name}]->(n3) RETURN n1, n3`;
      }
    }
    else if(targetNodeId === to)
    {
      if(sourceNodeType === 'Kriminalac' && targetNodeType === 'Kriminalac')
        {
          query = `MATCH (n1:Kriminalac {jmbg: $sourceNodeId})-[r]->(n2:Kriminalac {jmbg: $targetNodeId}), (n3:Kriminalac {jmbg: $from})
                    WITH r, n1, n2, n3 
                    DELETE r 
                    CREATE (n3)-[:${name}]->(n2) RETURN n3, n2`;
        }
        else if(sourceNodeType === 'Kriminalac' && targetNodeType !== 'Kriminalac')
        {
          query = `MATCH (n1:Kriminalac {jmbg: $sourceNodeId})-[r]->(n2:${targetNodeType} {id: $targetNodeId}), (n3:Kriminalac {jmbg: $from})
                    WITH r, n1, n2, n3
                    DELETE r 
                    CREATE (n3)-[:${name}]->(n2) RETURN n3, n2`;
        }
        else if(sourceNodeType !== 'Kriminalac' && targetNodeType === 'Kriminalac')
        {
          query = `MATCH (n1:${sourceNodeType} {id: $sourceNodeId})-[r]->(n2:Kriminalac {jmbg: $targetNodeId}), (n3:${type1} {id: $from})
                    WITH r, n1, n2, n3
                    DELETE r 
                    CREATE (n3)-[:${name}]->(n2) RETURN n3, n2`;
        }
        else if(sourceNodeType !== 'Kriminalac' && targetNodeType !== 'Kriminalac')
        {
          query = `MATCH (n1:${sourceNodeType} {id: $sourceNodeId})-[r]->(n2:${targetNodeType} {id: $targetNodeId}), (n3:${type1} {id: $from})
                    WITH r, n1, n2, n3
                    DELETE r 
                    CREATE (n3)-[:${name}]->(n2) RETURN n3, n2`;
        }
    }
  }
  else
  {
    return res.status(400).json({ message: 'Veza može biti promenjena samo između čvorova istog tipa.' });
  }



  console.log("QQQQQ: ", query);

  console.log("t1, from: ", type1);
  console.log(from);
  console.log("t2, to: ", type2);
  console.log(to)

  try {
    
    const result = await session.run(query, { sourceNodeId, targetNodeId, from, to, name });

    console.log(result.records);

    if (result.records.length > 0) {
      return res.status(200).json({ message: 'Veza uspešno dodata!'});
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
  console.log(`Neo4j server is running on http://localhost:${PORT}`);
  console.log(`MongoDB server is running on http://localhost:27017`);
});
