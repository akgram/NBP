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
    console.log("Email je uspešno poslat!");

  } catch (error) {
    console.error("Greška pri slanju emaila:", error);  // Log greške ako dođe do problema
    throw error;  // Prebacujemo grešku dalje
  }
}

app.post('/send-email', async (req, res) => {
  //console.log("alo");
  console.log(req.body);
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email i lozinka su obavezni!' });
  }

  try {
    await sendEmail(email);
    //const hashedPassword = await bcrypt.hash(password, 10); //  nismo preko hash jer nije bitno za ovu app a treba da se salje sa back na front pa nazad na back itd...
    //console.log(hashedPassword);

    await client.hSet(`user:${email}`, {
      email: email,
      password: password, //hashedPassword
    });
    


    console.log(`Email poslat i korisnik sačuvan: ${email}`);
    res.status(200).json({ password: password });
  } catch (error) {
    res.status(500).json({ message: 'Greška pri slanju emaila' });
  }
});



app.get('/auctions', async (req, res) => {
  try {
    const keys = await client.keys('auction:*');

    //if (keys.length === 0) {
      //return res.status(404).json({ message: 'Nema aukcija u kešu' });  // imamo alert za obavestenje
    //}

    const auctions = [];
    for (const key of keys) {
      const auction = await client.hGetAll(key);
      auction.id = key.split(':')[1];  // trazen si pola sat
      auctions.push(auction);
    }

    res.status(200).json(auctions);
  } catch (error) {
    res.status(500).json({ message: 'Greška pri povlačenju aukcija' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const keys = await client.keys('user:*');

    const users = [];
    for (const key of keys) {
      const user = await client.hGetAll(key);
      user.id = key.split(':')[1];  // trazen si pola sat
      users.push(user);
    }

    console.log(users);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Greška pri povlačenju user-a' });
  }
});

app.get('/offers', async (req, res) => {
  try {
    const keys = await client.keys('offer:*');

    let allOffers = [];
    for (let key of keys) {
        const offers = await client.zRangeWithScores(key, 0, -1);
        const offersWithId = offers.map(offer => ({
          ...offer,
          id_auction: parseInt(key.split(':')[1])  // id aukcije za koju je offer
        }));
        allOffers = allOffers.concat(offersWithId);
    }

    console.log(allOffers);

    res.status(200).json(allOffers);
  } catch (error) {
    res.status(500).json({ message: 'Greška pri povlačenju user-a' });
  }
});

app.post('/add-auction', async (req, res) => {
  const { id, title, price, offer, image, owner, desc, createdAt } = req.body;

  if (!title || !price || !image) {
    return res.status(400).json({ message: 'Sva polja su obavezna!' });
  }

  const auction = {
    id,
    title,
    price,
    offer,
    image,
    owner,
    desc,
    createdAt
  };

  try {
    await client.hSet(`auction:${auction.id}`, {
      title: auction.title,
      price: auction.price,
      offer: auction.offer,
      image: auction.image,
      owner: auction.owner,
      desc: auction.desc,
      createdAt: auction.createdAt
    });
    //await redisClient.expire(`auction:${auction.id}`, 1800); // kes traje 30 min
    res.status(201).json({ message: 'Aukcija sačuvana!', auction });
  } catch (error) {
    res.status(500).json({ message: 'Greška pri dodavanju aukcije' });
  }
});


app.delete('/auction/:id', async (req, res) => {
  const auctionId = req.params.id;

  try {
    await client.del(`auction:${auctionId}`);
    res.status(200).json({ message: 'Aukcija je uspešno obrisana.' });
  } catch (error) {
    console.error('Greška pri brisanju aukcije:', error);
    res.status(500).json({ message: 'Došlo je do greške pri brisanju aukcije.' });
  }
});


app.put('/edit/:id', async (req, res) => {
  const auctionId = req.params.id;
  const updatedAuctionData = req.body;

  //console.log(auctionId);
  //console.log(updatedAuctionData);
  //console.log(parseInt(updatedAuctionData.price));

  try {

    await client.hSet(`auction:${auctionId}`, {
      title: updatedAuctionData.title,
      desc: updatedAuctionData.desc,
      price: parseInt(updatedAuctionData.price),
      offer: parseInt(updatedAuctionData.price),
      image: updatedAuctionData.image,
      createdAt: updatedAuctionData.createdAt
    });

    res.status(200).json({ message: 'Aukcija uspešno ažurirana', auction: updatedAuctionData });
  } catch (err) {
    console.error('Greška pri ažuriranju aukcije:', err);
    res.status(500).json({ message: 'Greška pri ažuriranju aukcije', error: err });
  }
});

app.put('/offer/:id', async (req, res) => {
  const auctionId = req.params.id;
  const updatedAuctionData = req.body;

  // console.log(auctionId);
  // console.log(updatedAuctionData);
  // console.log(parseInt(updatedAuctionData.offer));
  // console.log(updatedAuctionData.bidder);
  // console.log(updatedAuctionData.count);

  try {

    await client.hSet(`auction:${auctionId}`, {
      offer: parseInt(updatedAuctionData.offer),
    });

    await client.zAdd(`offer:${auctionId}`, {
      score: parseInt(updatedAuctionData.offer), value: updatedAuctionData.bidder + ' [' + `${updatedAuctionData.count}` + ']'
    });

    res.status(200).json({ message: 'Aukcija uspešno ažurirana', auction: updatedAuctionData });
  } catch (err) {
    console.error('Greška pri ažuriranju aukcije:', err);
    res.status(500).json({ message: 'Greška pri ažuriranju aukcije', error: err });
  }
});



// Pokretanje servera
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
