const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');  // Da bi mogao da parsiraš JSON telo zahteva
const redis = require('redis');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const e = require('express');



const client = redis.createClient({ url: 'redis://localhost:6379' });
client.connect().catch(console.error);

client.on('connect', () => { console.log('Connected to Redis'); });
  
client.on('error', (err) => { console.log('Error connecting to Redis:', err); });

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

async function sendEmail(toEmail, arrEmails, tmp, bidder) {
  try {

    if(arrEmails === null && typeof toEmail !== 'number')
    {
      password = "";
      password = createPassword();  // Pozivamo createPassword da generiše lozinku
      console.log("Generisana lozinka:", password);  // Dodajemo log

      const mailOptions = {
        from: 'akrstic497@gmail.com',
        to: toEmail,
        subject: 'Resetovanje lozinke',
        text: `Ovo je vaša nova lozinka: ${password}`,
      };

      await transporter.sendMail(mailOptions);
      console.log("Email je uspešno poslat!");
    }
    else
    {
      let title = null;
      let offer = null;

      const keys = await client.keys('auction:*');

      const auctions = [];
      for (const key of keys) {
        const auction = await client.hGetAll(key);
        auction.id = key.split(':')[1];  // trazen si pola sat
        auctions.push(auction);
      }

      for(let i = 0; i < auctions.length; i++)
      {
        if(parseInt(auctions[i].id) === parseInt(toEmail))
        {
          const own = auctions[i].owner;
          title = auctions[i].title;
          offer = auctions[i].offer;

          const mailOptions = {
            from: 'akrstic497@gmail.com',
            to: own,
            subject: 'BidSnap Obaveštava!',
            text: `Poštovani,\nZa Vaš oglas: "${auctions[i].title}" je upravo izneta ponuda: ${auctions[i].offer}EUR!.\nVaš BidSnap!`,
            };

          await transporter.sendMail(mailOptions);
          console.log("Email je uspešno poslat vlasniku!");
        }    
      }

        const mailOptionsBidder = {
          from: 'akrstic497@gmail.com',
          to: bidder,
          subject: 'BidSnap Obaveštava!',
          text: `Poštovani,\nUpravo ste licitirali za: "${title}", Vaša ponuda je: ${offer}EUR.\nSrećno, Vaš BidSnap!`,
        };
        // prvo saljemo mail bidderu
        if (arrEmails.length === 1 || tmp === 1) {
          await transporter.sendMail(mailOptionsBidder);
        }
        
        const mailOptionsOthers = {
          from: 'akrstic497@gmail.com',
          to: '',
          subject: 'BidSnap Obaveštava!',
          text: `Poštovani,\nNa oglas za koji ste licitirali: "${title}", izneta je nova ponuda: ${offer}EUR.\nVaš BidSnap!`,
        };
        
        // onda saljemo ostalim ucesnicima
        if (arrEmails.length > 1) {
          for (let i = 0; i < arrEmails?.length; i++) {
            if(bidder === arrEmails[i])
            {
              //console.log(bidder);
              //console.log(arrEmails[i]);
              continue;

            }
            if (i === 0) {
              mailOptionsOthers.to = arrEmails[i];
            } else {
              mailOptionsOthers.to += ', ' + arrEmails[i];
            }
          }
          await transporter.sendMail(mailOptionsOthers);
          console.log("Email je uspešno poslat!");
        }


      }

  } catch (error) {
    console.error("Greška pri slanju emaila:", error);  // Log greške ako dođe do problema
    throw error;  // Prebacujemo grešku dalje
  }
}

app.post('/send-notify', async (req, res) => {
  //console.log(req.body);
  const { id_auction, bidder } = req.body;
  //console.log("send-notify");
  //console.log(parseInt(id_auction));
  //console.log(bidder);

  try {

    if(await client.exists(`offer:${parseInt(id_auction)}`))
    {
      const bidders = await client.zRange(`offer:${parseInt(id_auction)}`, 0, -1);

      const emails = [...new Set(bidders.map(bidder => bidder.split(' ')[0]))]; // izbacuje [broj] jer ih povlacimo iz offer-a kako ne bi stiglo svima obavestenje koje ne treba
      // set nema duplikate
      
      const arrEmails = Array.from(emails);

      let tmp = 0;
      if (arrEmails.includes(bidder)) {
        tmp = 1;
      }
      //console.log("send-notify2");
      //console.log(id_auction);
      //console.log(arrEmails);
      await sendEmail(parseInt(id_auction), arrEmails, tmp, bidder);
      
      console.log("Obavesteni su ucesnici!");
      res.status(200).json({ message: 'Obavesteni!' });
    }
    else
    {
      res.status(200).json({ message: 'Prva ponuda!' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Greška pri slanju emaila' });
  }
});

app.post('/send-email', async (req, res) => {
  //console.log("alo");
  //console.log(req.body);
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email i lozinka su obavezni!' });
  }

  try {
    await sendEmail(email, null, 0, null);
    //const hashedPassword = await bcrypt.hash(password, 10); //  nismo preko hash jer nije bitno za ovu app a treba da se salje sa back na front pa nazad na back itd...
    //console.log(hashedPassword);  // ali nije ni bitan jer se svakim zatvaranjem modal-a resetuje

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
    await client.expire(`auction:${auction.id}`, 70); // kes podatak, u sekundama (trebalo bi 7 dana ali radimo sa 20sec zbog testa)
                                                      // imamo 2 oglasa koji nemaju Time To Live radi testiranja app
    await client.sAdd(`all_auctions:${auction.id}`, `${auction.id}`); // potrebno za detekciju isticanja aukcije
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

async function sendExpire(owner, winnerEmail, otherBidders, offerPrice, title) {
  const mailOptionsOwner = {
    from: 'akrstic497@gmail.com',
    to: owner,
    subject: 'BidSnap Obaveštava!',
    text: `Poštovani,\nZavršeno je javno nadmetanje za Vaš predmet: "${title}", konacna cena je: ${offerPrice}EUR.\nVaš BidSnap!`,
  };
  // prvo saljemo mail owneru
  if (owner.length > 0) {
    await transporter.sendMail(mailOptionsOwner);
  }

  //////////////////////////////////////
  const mailOptionsWinner = {
    from: 'akrstic497@gmail.com',
    to: winnerEmail,
    subject: 'BidSnap Obaveštava!',
    text: `Poštovani,\nČestitamo, upravo ste pobedili na javnom nadmetanju za predmet: "${title}", Vaša ponuda je: ${offerPrice}EUR.\nVaš BidSnap!`,
  };

  // saljemo winneru
  if (winnerEmail.length > 0) {
    await transporter.sendMail(mailOptionsWinner);
  }

  //////////////////////////////////////

  const mailOptionsBidders = {
    from: 'akrstic497@gmail.com',
    to: otherBidders,
    subject: 'BidSnap Obaveštava!',
    text: `Poštovani,\nPoštovani, licitacija za predmet: "${title}" je završena. Nažalost, Vaša ponuda nije bila najviša, najviša ponuda je: ${offerPrice}EUR.\nVaš BidSnap!`,
  };
  
  // onda saljemo ostalim ucesnicima
  if (otherBidders.length >= 1) {
    for (let i = 0; i < otherBidders?.length; i++) {
      if (i === 0) {
        mailOptionsBidders.to = otherBidders[i];
      } else {
        mailOptionsBidders.to += ', ' + otherBidders[i];
      }
    }
    await transporter.sendMail(mailOptionsBidders);
  }

  console.log("Expire Obavestenje!");
}

let auctionData = {}; // cuva podatke trenutno aktivnih aukcija, kad istekne TTL brise se odavde

function startAuctionWatcher() {
  setInterval(async () => {
    //const allAuctions = await client.sMembers("all_auctions:*");
    const allAuctions = await client.keys("all_auctions:*");
    const auctions = await client.keys("auction:*"); // Dobij sve aukcije

    const allAuctionIds = allAuctions.map(auction => auction.split(":")[1]);
    const auctionIds = auctions.map(auction => auction.split(":")[1]);

    for (const id of auctionIds) {
      const data = await client.hGetAll(`auction:${id}`);
      auctionData[parseInt(id)] = data;
    }

    //console.log(auctionData["5"]);

    const expiredAuctions = allAuctionIds.filter(auction => !auctionIds.includes(auction));

    console.log(allAuctionIds);
    console.log(auctionIds);
    console.log(expiredAuctions);

    //const winner = await client.zRangeWithScores(`offer:${parseInt(5)}`, -1, -1);
    //console.log(winner[0].value.split(' ')[0]);

    for (const id of expiredAuctions) {
      console.log(`Aukcija ${id} je završena!`);

      const title = auctionData[id].title;
      console.log(title) 
      const owner = auctionData[id].owner;
      console.log(owner);
      const offerPrice = auctionData[id].offer;
      console.log("test")
      
      const winner = await client.zRangeWithScores(`offer:${parseInt(id)}`, -1, -1);
      console.log(winner);
      const winnerEmail = winner[0].value.split(' ')[0];
      console.log(winnerEmail)

      const bidders = await client.zRange(`offer:${parseInt(id)}`, 0, -1) || [];
      console.log(bidders)
      const emails = [...new Set(bidders.map(bidder => bidder.split(' ')[0]))];
      const arrEmails = Array.from(emails);
      console.log(arrEmails);

      const otherBidders = arrEmails.filter(bidder => bidder.toString() !== winnerEmail.toString());

      console.log(otherBidders);

      console.log(`pre poziv`);
      sendExpire(owner, winnerEmail, otherBidders, offerPrice, title);

      await client.del(`all_auctions:${id}`);
      await client.del(`offer:${id}`);
      delete auctionData[id];
    }
  }, 5000); // provera svakih 5sec
}


// server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  startAuctionWatcher();
});
