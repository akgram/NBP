const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');  // Da bi mogao da parsiraš JSON telo zahteva
const redis = require('redis');
const cors = require('cors');

const client = redis.createClient({ url: 'redis://localhost:6379' });
client.connect().catch(console.error);

client.on('connect', () => {
    console.log('Connected to Redis');
  });
  
  client.on('error', (err) => {
    console.log('Error connecting to Redis:', err);
  });

// Middleware za parsiranje JSON-a
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' })); // za front



// Ruta za login
app.get('/api/login/:username/:password', async (req, res) => {
  const { username, password } = req.params; // Koristimo req.params

  console.log("Username:", username);
  console.log("Password:", password);

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  try {
    const val = await client.get("Administrator");
    console.log(val);

    if(username === "Administrator" && password === val)
    {
      return res.status(200).json({ message: 'Login successful.' });
    }
    else 
    {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }
  } catch (error) {
    console.error('Error querying Redis:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Pokretanje servera
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
