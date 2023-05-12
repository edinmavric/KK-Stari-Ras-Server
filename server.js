const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '***************@gmail.com',
    pass: '********',
  },
});

contactEmail.verify(error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  console.log(`\n ${name}, \n ${email}, \n ${message}`);
  const mail = {
    from: name,
    to: '***************@gmail.com',
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, error => {
    if (error) {
      res.json({ status: 'ERROR' });
    } else {
      res.json({ status: 'Message Sent' });
    }
  });
});

app.get('/api', (req, res) => {
  const rosterTableData = [
    {
      name: 'Kosta Petrovic',
      jerseyNumber: 0,
      height: '195cm',
      weight: '81kg',
      points: 1.3,
      assists: 0.4,
      rebounds: 1.9,
      position: 'Krilo',
      active: true,
    },

    {
      name: 'Tadija Nikolic',
      jerseyNumber: 4,
      height: '178cm',
      weight: '83kg',
      points: 3.4,
      assists: 5.3,
      rebounds: 2.8,
      position: 'Bek',
      active: true,
    },

    {
      name: 'Kadir Zornic',
      jerseyNumber: 1,
      height: '185cm',
      weight: '76kg',
      points: 1.9,
      assists: 2.6,
      rebounds: 2.0,
      position: 'Bek',
      active: true,
    },

    {
      name: 'Asim Djulovic',
      jerseyNumber: 5,
      height: '203cm',
      weight: '100kg',
      points: 17.7,
      assists: 6.9,
      rebounds: 9.7,
      position: 'Krilo',
      active: true,
    },

    {
      name: 'Muhamed Salihovic',
      jerseyNumber: 7,
      height: '185cm',
      weight: '82kg',
      points: 9.0,
      assists: 7.8,
      rebounds: 4.5,
      position: 'Bek',
      active: true,
    },

    {
      name: 'Veljko Djurovic',
      jerseyNumber: 8,
      height: '201cm',
      weight: '87kg',
      points: 11.2,
      assists: 5.7,
      rebounds: 8.9,
      position: 'Krilo',
      active: true,
    },

    {
      name: 'Orhan Derdemez',
      jerseyNumber: 9,
      height: '198cm',
      weight: '91kg',
      points: 3.1,
      assists: 1.9,
      rebounds: 8.3,
      position: 'Krilo',
      active: true,
    },

    {
      name: 'Besim Bruncevic',
      jerseyNumber: 10,
      height: '193cm',
      weight: '84kg',
      points: 13.8,
      assists: 7.5,
      rebounds: 6.2,
      position: 'Bek',
      active: true,
    },

    {
      name: 'Zeljko Milic',
      jerseyNumber: 13,
      height: '198cm',
      weight: '84kg',
      points: 14.2,
      assists: 1.3,
      rebounds: 7.9,
      position: 'Bek',
      active: true,
    },

    {
      name: 'Ridvan Tutic',
      jerseyNumber: 14,
      height: '210cm',
      weight: '105kg',
      points: 17.3,
      assists: 5.4,
      rebounds: 14.9,
      position: 'Centar',
      active: true,
    },

    {
      name: 'Enis Djulovic',
      jerseyNumber: 15,
      height: '203cm',
      weight: '122kg',
      points: 17.4,
      assists: 5.3,
      rebounds: 11.8,
      position: 'Centar',
      active: true,
    },

    {
      name: 'Edin Mavric',
      jerseyNumber: 16,
      height: '204cm',
      weight: '97kg',
      points: 8.5,
      assists: 3.5,
      rebounds: 13.6,
      position: 'Krilo',
      active: true,
    },

    {
      name: 'Djordje Pantovic',
      jerseyNumber: 7,
      height: '193cm',
      weight: '84kg',
      points: 7.0,
      assists: 4.7,
      rebounds: 5.9,
      position: 'Bek',
      active: false,
    },

    {
      name: 'Tarik Bruncevic',
      jerseyNumber: 1,
      height: '206cm',
      weight: '105kg',
      points: 14.0,
      assists: 5.8,
      rebounds: 10.5,
      position: 'Krilo',
      active: false,
    },

    {
      name: 'Vladan Pantovic',
      jerseyNumber: 9,
      height: '198cm',
      weight: '101kg',
      points: 2.1,
      assists: 3.9,
      rebounds: 8.3,
      position: 'Centar',
      active: false,
    },

    {
      name: 'Aldin Avdic',
      jerseyNumber: 11,
      height: '182cm',
      weight: '98kg',
      points: 5.2,
      assists: 3.3,
      rebounds: 7.9,
      position: 'Bek',
      active: false,
    },

    {
      name: 'Dino Berba',
      jerseyNumber: 13,
      height: '198cm',
      weight: '102kg',
      points: 12.7,
      assists: 9.9,
      rebounds: 12.7,
      position: 'Bek',
      active: false,
    },

    {
      name: 'Dzenis Bulic',
      jerseyNumber: 10,
      height: '201cm',
      weight: '106kg',
      points: 12.7,
      assists: 4.9,
      rebounds: 11.7,
      position: 'Krilo',
      active: false,
    },

    {
      name: 'Omer Derdemez',
      jerseyNumber: 6,
      height: '198cm',
      weight: '96kg',
      points: 19.7,
      assists: 4.9,
      rebounds: 8.7,
      position: 'Bek',
      active: false,
    },

    {
      name: 'Uros Petrovic',
      jerseyNumber: 15,
      height: '193cm',
      weight: '103kg',
      points: 20.7,
      assists: 5.6,
      rebounds: 8.0,
      position: 'Bek',
      active: false,
    },

    {
      name: 'Edib Bronja',
      jerseyNumber: 16,
      height: '195cm',
      weight: '82kg',
      points: 8.5,
      assists: 3.5,
      rebounds: 10.6,
      position: 'Krilo',
      active: false,
    },

    {
      name: 'Enes Smailovic',
      jerseyNumber: 11,
      height: '203cm',
      weight: '98kg',
      points: 10.7,
      assists: 4.9,
      rebounds: 9.7,
      position: 'Krilo',
      active: false,
    },

    {
      name: 'Veljko Petrovic',
      jerseyNumber: 16,
      height: '195cm',
      weight: '108kg',
      points: 5.5,
      assists: 3.5,
      rebounds: 8.6,
      position: 'Krilo',
      active: false,
    },
  ];
  
  res.json(rosterTableData);
});

app.get('/home', (req, res) => {
  const leagueTableData = [
    {
      position: 1,
      team: 'Polet',
      gamesPlayed: 14,
      wins: 13,
      losses: 1,
      pointsResults: '1196 : 831',
      pointsPlusMinus: 365,
      pointsLeague: 27
    },
    {
      position: 2,
      team: 'Stari Ras',
      gamesPlayed: 14,
      wins: 11,
      losses: 3,
      pointsResults: '1124 : 960',
      pointsPlusMinus: 164,
      pointsLeague: 25
    },
    {
      position: 3,
      team: 'Prva Petoletka',
      gamesPlayed: 14,
      wins: 10,
      losses: 4,
      pointsResults: '1123 : 976',
      pointsPlusMinus: 147,
      pointsLeague: 23
    },
    {
      position: 4,
      team: 'Novi Pazar 1969',
      gamesPlayed: 14,
      wins: 8,
      losses: 6,
      pointsResults: '1166 : 1116',
      pointsPlusMinus: 50,
      pointsLeague: 22
    },
    {
      position: 5,
      team: 'Goc',
      gamesPlayed: 14,
      wins: 7,
      losses: 7,
      pointsResults: '1180 : 1189',
      pointsPlusMinus: -9,
      pointsLeague: 21
    },
    {
      position: 6,
      team: 'Trepca',
      gamesPlayed: 14,
      wins: 4,
      losses: 10,
      pointsResults: '1115 : 1176',
      pointsPlusMinus: -61,
      pointsLeague: 18
    },
    {
      position: 7,
      team: 'OKK KV',
      gamesPlayed: 14,
      wins: 3,
      losses: 11,
      pointsResults: '984 : 1184',
      pointsPlusMinus: -200,
      pointsLeague: 17
    },
    {
      position: 8,
      team: 'Bane',
      gamesPlayed: 14,
      wins: 0,
      losses: 14,
      pointsResults: '713 : 1169',
      pointsPlusMinus: -456,
      pointsLeague: 13
    },
  ];
  
  res.json(leagueTableData);
})

app.listen(5000);
