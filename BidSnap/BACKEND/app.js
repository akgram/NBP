const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');  // Da bi mogao da parsiraš JSON telo zahteva
const redis = require('redis');
const cors = require('cors');

const client = redis.createClient({
    url: 'redis://localhost:6379' // Možeš promeniti URL i port ako je potrebno
  });
client.connect().catch(console.error);

client.on('connect', () => {
    console.log('Connected to Redis');
  });
  
  client.on('error', (err) => {
    console.log('Error connecting to Redis:', err);
  });

// Middleware za parsiranje JSON-a
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:4200' // Podesi na adresu svog front-end-a
  }));

// Ruta za login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  console.log(username);
  console.log(password);

  if (!username || !password) {
    console.log("aaaaaaaaaaaaaaaa");
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  try { ///NE STAMPA CONSOLE.LOG KAO DA NE RADI GET FUNKCIJA
    // Provera da li korisničko ime postoji u Redis bazi
    client.get(username, (err, storedPassword) => {
        if (err) {
          console.error('Error querying Redis:', err);
          return res.status(500).json({ message: 'Internal server error.' });
        }
        console.log("izmedju if");
      
        if (storedPassword) {
            console.log("u if");
          // Proveri lozinku
          if (storedPassword === password) {
            console.log("u drugi if");
            return res.status(200).json({ message: 'Login successful.' });
          } else {
            return res.status(401).json({ message: 'Invalid username or password.' });
          }
        } else {
          return res.status(401).json({ message: 'Invalid username or password.' });
        }
      });
  } catch (error) {
    console.error('Error querying Redis:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Pokretanje servera
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
