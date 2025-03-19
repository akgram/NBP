const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');  // Da bi mogao da parsiraš JSON telo zahteva
const redis = require('redis');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');


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

const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase= "abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbol="!@#$%^&()_=+[]{}|<>/~";
//const lenght = 12;
let password = "";

function createPassword(lenght = 12){
    let password="";

    while(password.length!= lenght)
    {
        password+= upperCase[Math.floor(Math.random() * upperCase.length)];
        password+= lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password+= numbers[Math.floor(Math.random() * numbers.length)];
        password+= symbol[Math.floor(Math.random() * symbol.length)];
    }
    return password;
}

const transporter = nodemailer.createTransport({  //SMTP server za slanje
  service: 'gmail',
  auth: {
    user: 'akrstic497@gmail.com',
    pass: 'ergr tfwu sweq hhei'
  },
  secure: true,
});

async function sendEmail(toEmail) {
  try {
    password = "";
    password = createPassword();  // Pozivamo createPassword da generiše lozinku
    console.log("Generisana lozinka:", password);  // Dodajemo log

    const mailOptions = {
      from: 'akrstic497@gmail.com',
      to: toEmail,
      subject: 'Resetovanje lozinke',
      text: `Ovo je vaša nova lozinka: ${password}`,
    };

    console.log("Šaljem email sa opcijama:", mailOptions);  // Dodajemo log pred slanje emaila
    await transporter.sendMail(mailOptions);
    console.log("✅ Email je uspešno poslat!");

  } catch (error) {
    console.error("❌ Greška pri slanju emaila:", error);  // Log greške ako dođe do problema
    throw error;  // Prebacujemo grešku dalje
  }
}

app.post('/send-email', async (req, res) => {
  console.log("alo");
  console.log(req.body);
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email i lozinka su obavezni!' });
  }

  try {
    await sendEmail(email);

    console.log("📌 Pre upisa u Redis");
    //const hashedPassword = await bcrypt.hash(password, 10); //  nismo preko hash jer nije bitno za ovu app a treba da se salje sa back na front pa nazad na back itd...
    //console.log(hashedPassword);

    await client.hSet(`user:${email}`, {
      email: email,
      password: password, //hashedPassword
    });
    


    console.log(`✅ Email poslat i korisnik sačuvan: ${email}`);
    res.status(200).json({ password: password });
  } catch (error) {
    res.status(500).json({ message: 'Greška pri slanju emaila' });
  }
});



app.get('/auctions', async (req, res) => {
  try {
    const keys = await client.keys('auction:*');

    if (keys.length === 0) {
      return res.status(404).json({ message: 'Nema aukcija u kešu' });
    }

    const auctions = [];
    for (const key of keys) {
      const auction = await client.hGetAll(key);
      auctions.push(auction);
    }

    res.status(200).json(auctions);
  } catch (error) {
    res.status(500).json({ message: 'Greška pri povlačenju aukcija' });
  }
});

app.post('/add-auction', async (req, res) => {
  const { id, title, price, image } = req.body;

  if (!title || !price || !image) {
    return res.status(400).json({ message: 'Sva polja su obavezna!' });
  }

  const auction = {
    id, // Generiše unikatan ID
    title,
    price,
    image
  };

  try {
    await client.hSet(`auction:${auction.id}`, {
      title: auction.title,
      price: auction.price,
      image: auction.image
    });
    //await redisClient.expire(`auction:${auction.id}`, 1800); // Keš traje 30 min
    res.status(201).json({ message: 'Aukcija sačuvana!', auction });
  } catch (error) {
    res.status(500).json({ message: 'Greška pri dodavanju aukcije' });
  }
});


// Pokretanje servera
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
