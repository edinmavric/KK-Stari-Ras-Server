const express = require('express');
const path = require('path');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

let GMAIL_USER = 'edinmavric10@gmail.com';
let GMAIL_PASSWORD = 'dzdjwkkxfpznschf';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD,
  },
});

contactEmail.verify(error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.use(cors());

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

router.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: email,
    to: 'edinmavric10@gmail.com',
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.log(error);
      res.json({ status: 'ERROR' });
    } else {
      console.log('Message sent:', info.messageId);
      res.json({ status: 'Message Sent Successfully!' });
    }
  });
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/players', (req, res) => {
  const rosterTableData = [
    {
      name: 'Kosta Petrovic',
      firstName: 'Kosta',
      surName: 'Petrovic',
      jerseyNumber: 0,
      height: '195cm',
      weight: '81kg',
      points: 1.3,
      assists: 0.4,
      rebounds: 1.9,
      position: 'Krilo',
      active: true,
      playerImage: '/images/player images/test-player-image.png',
    },

    {
      name: 'Tadija Nikolic',
      firstName: 'Tadija',
      surName: 'Nikolic',
      jerseyNumber: 4,
      height: '178cm',
      weight: '83kg',
      points: 3.4,
      assists: 5.3,
      rebounds: 2.8,
      position: 'Bek',
      active: true,
      playerImage: '/images/player images/test-player-image.png',
    },

    {
      name: 'Kadir Zornic',
      firstName: 'Kadir',
      surName: 'Zornic',
      jerseyNumber: 1,
      height: '185cm',
      weight: '76kg',
      points: 1.9,
      assists: 2.6,
      rebounds: 2.0,
      position: 'Bek',
      active: true,
      playerImage: '/images/player images/test-player-image.png',
    },

    {
      name: 'Asim Djulovic',
      firstName: 'Asim',
      surName: 'Djulovic',
      jerseyNumber: 5,
      height: '203cm',
      weight: '100kg',
      points: 17.7,
      assists: 6.9,
      rebounds: 9.7,
      position: 'Krilo',
      active: true,
      playerImage: '/images/player images/asim-djulovic.png',
    },

    {
      name: 'Muhamed Salihovic',
      firstName: 'Muhamed',
      surName: 'Salihovic',
      jerseyNumber: 7,
      height: '185cm',
      weight: '82kg',
      points: 9.0,
      assists: 7.8,
      rebounds: 4.5,
      position: 'Bek',
      active: true,
      playerImage: '/images/player images/muhamed-salihovic.png',
    },

    {
      name: 'Veljko Djurovic',
      firstName: 'Veljko',
      surName: 'Djurovic',
      jerseyNumber: 8,
      height: '201cm',
      weight: '87kg',
      points: 11.2,
      assists: 5.7,
      rebounds: 8.9,
      position: 'Krilo',
      active: true,
      playerImage: '/images/player images/test-player-image.png',
    },

    {
      name: 'Orhan Derdemez',
      firstName: 'Orhan',
      surName: 'Derdemez',
      jerseyNumber: 9,
      height: '198cm',
      weight: '91kg',
      points: 3.1,
      assists: 1.9,
      rebounds: 8.3,
      position: 'Krilo',
      active: true,
      playerImage: '/images/player images/orhan-derdemez.png',
    },

    {
      name: 'Besim Bruncevic',
      firstName: 'Besim',
      surName: 'Bruncevic',
      jerseyNumber: 10,
      height: '193cm',
      weight: '84kg',
      points: 13.8,
      assists: 7.5,
      rebounds: 6.2,
      position: 'Bek',
      active: true,
      playerImage: '/images/player images/besim-bruncevic.png',
    },

    {
      name: 'Zeljko Milic',
      firstName: 'Zeljko',
      surName: 'Milic',
      jerseyNumber: 13,
      height: '198cm',
      weight: '84kg',
      points: 14.2,
      assists: 1.3,
      rebounds: 7.9,
      position: 'Bek',
      active: true,
      playerImage: '/images/player images/zeljko-milic.png',
    },

    {
      name: 'Ridvan Tutic',
      firstName: 'Ridvan',
      surName: 'Tutic',
      jerseyNumber: 14,
      height: '210cm',
      weight: '105kg',
      points: 17.3,
      assists: 5.4,
      rebounds: 14.9,
      position: 'Centar',
      active: true,
      playerImage: '/images/player images/ridvan-tutic.png',
    },

    {
      name: 'Enis Djulovic',
      firstName: 'Enis',
      surName: 'Djulovic',
      jerseyNumber: 15,
      height: '203cm',
      weight: '122kg',
      points: 17.4,
      assists: 5.3,
      rebounds: 11.8,
      position: 'Centar',
      active: true,
      playerImage: '/images/player images/enis-djulovic.png',
    },

    {
      name: 'Edin Mavric',
      firstName: 'Edin',
      surName: 'Mavric',
      jerseyNumber: 16,
      height: '204cm',
      weight: '97kg',
      points: 8.5,
      assists: 3.5,
      rebounds: 13.6,
      position: 'Krilo',
      active: true,
      playerImage: '/images/player images/test-player-image.png',
    },

    {
      name: 'Djordje Pantovic',
      firstName: 'Dordje',
      surName: 'Pantovic',
      jerseyNumber: 7,
      height: '193cm',
      weight: '84kg',
      points: 7.0,
      assists: 4.7,
      rebounds: 5.9,
      position: 'Bek',
      active: false,
      playerImage: '/images/player images/test-player-image.png',
    },

    {
      name: 'Tarik Bruncevic',
      firstName: 'Tarik',
      surName: 'Bruncevic',
      jerseyNumber: 1,
      height: '206cm',
      weight: '105kg',
      points: 14.0,
      assists: 5.8,
      rebounds: 10.5,
      position: 'Krilo',
      active: false,
      playerImage: '/images/player images/tarik-bruncevic.png',
    },

    {
      name: 'Vladan Pantovic',
      firstName: 'Vladan',
      surName: 'Pantovic',
      jerseyNumber: 9,
      height: '198cm',
      weight: '101kg',
      points: 2.1,
      assists: 3.9,
      rebounds: 8.3,
      position: 'Centar',
      active: false,
      playerImage: '/images/player images/test-player-image.png',
    },

    {
      name: 'Aldin Avdic',
      firstName: 'Aldin',
      surName: 'Avdic',
      jerseyNumber: 11,
      height: '182cm',
      weight: '98kg',
      points: 5.2,
      assists: 3.3,
      rebounds: 7.9,
      position: 'Bek',
      active: false,
      playerImage: '/images/player images/aldin-avdic.png',
    },

    {
      name: 'Dino Berba',
      firstName: 'Dino',
      surName: 'Berba',
      jerseyNumber: 13,
      height: '198cm',
      weight: '102kg',
      points: 12.7,
      assists: 9.9,
      rebounds: 12.7,
      position: 'Bek',
      active: false,
      playerImage: '/images/player images/dino-berberistanin.png',
    },

    {
      name: 'Dzenis Bulic',
      firstName: 'Dzenis',
      surName: 'Bulic',
      jerseyNumber: 10,
      height: '201cm',
      weight: '106kg',
      points: 12.7,
      assists: 4.9,
      rebounds: 11.7,
      position: 'Krilo',
      active: false,
      playerImage: '/images/player images/dzenis-bulic.png',
    },

    {
      name: 'Omer Derdemez',
      firstName: 'Omer',
      surName: 'Derdemez',
      jerseyNumber: 6,
      height: '198cm',
      weight: '96kg',
      points: 19.7,
      assists: 4.9,
      rebounds: 8.7,
      position: 'Bek',
      active: false,
      playerImage: '/images/player images/omer-derdemez.png',
    },

    {
      name: 'Uros Petrovic',
      firstName: 'Uros',
      surName: 'Petrovic',
      jerseyNumber: 15,
      height: '193cm',
      weight: '103kg',
      points: 20.7,
      assists: 5.6,
      rebounds: 8.0,
      position: 'Bek',
      active: false,
      playerImage: '/images/player images/test-player-image.png',
    },

    {
      name: 'Edib Bronja',
      firstName: 'Edib',
      surName: 'Bronja',
      jerseyNumber: 16,
      height: '195cm',
      weight: '82kg',
      points: 8.5,
      assists: 3.5,
      rebounds: 10.6,
      position: 'Krilo',
      active: false,
      playerImage: '/images/player images/edib-bronja.png',
    },

    {
      name: 'Enes Smailovic',
      firstName: 'Enes',
      surName: 'Smailovic',
      jerseyNumber: 11,
      height: '203cm',
      weight: '98kg',
      points: 10.7,
      assists: 4.9,
      rebounds: 9.7,
      position: 'Krilo',
      active: false,
      playerImage: '/images/player images/test-player-image.png',
    },

    {
      name: 'Veljko Petrovic',
      firstName: 'Veljko',
      surName: 'Petrovic',
      jerseyNumber: 16,
      height: '195cm',
      weight: '108kg',
      points: 5.5,
      assists: 3.5,
      rebounds: 8.6,
      position: 'Krilo',
      active: false,
      playerImage: '/images/player images/veljko-petrovic.png',
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
      pointsLeague: 27,
    },
    {
      position: 2,
      team: 'Stari Ras',
      gamesPlayed: 14,
      wins: 11,
      losses: 3,
      pointsResults: '1124 : 960',
      pointsPlusMinus: 164,
      pointsLeague: 25,
    },
    {
      position: 3,
      team: 'Prva Petoletka',
      gamesPlayed: 14,
      wins: 10,
      losses: 4,
      pointsResults: '1123 : 976',
      pointsPlusMinus: 147,
      pointsLeague: 23,
    },
    {
      position: 4,
      team: 'Novi Pazar 1969',
      gamesPlayed: 14,
      wins: 8,
      losses: 6,
      pointsResults: '1166 : 1116',
      pointsPlusMinus: 50,
      pointsLeague: 22,
    },
    {
      position: 5,
      team: 'Goc',
      gamesPlayed: 14,
      wins: 7,
      losses: 7,
      pointsResults: '1180 : 1189',
      pointsPlusMinus: -9,
      pointsLeague: 21,
    },
    {
      position: 6,
      team: 'Trepca',
      gamesPlayed: 14,
      wins: 4,
      losses: 10,
      pointsResults: '1115 : 1176',
      pointsPlusMinus: -61,
      pointsLeague: 18,
    },
    {
      position: 7,
      team: 'OKK KV',
      gamesPlayed: 14,
      wins: 3,
      losses: 11,
      pointsResults: '984 : 1184',
      pointsPlusMinus: -200,
      pointsLeague: 17,
    },
    {
      position: 8,
      team: 'Bane',
      gamesPlayed: 14,
      wins: 0,
      losses: 14,
      pointsResults: '713 : 1169',
      pointsPlusMinus: -456,
      pointsLeague: 13,
    },
  ];

  res.json(leagueTableData);
});

app.get('/gallery', (req, res) => {
  const galleryImageData = [
    {
      id: 1,
      image: '/images/PHOTO-2023-05-15-11-25-22 (1).jpg',
      page: 1,
    },

    {
      id: 2,
      image: '/images/PHOTO-2023-05-15-11-25-22 (2).jpg',
      page: 1,
    },

    {
      id: 3,
      image: '/images/PHOTO-2023-05-15-11-25-22 (3).jpg',
      page: 1,
    },

    {
      id: 4,
      image: '/images/PHOTO-2023-05-15-11-25-22 (4).jpg',
      page: 1,
    },

    {
      id: 5,
      image: '/images/PHOTO-2023-05-15-11-25-22 (5).jpg',
      page: 1,
    },

    { id: 6, image: '/images/PHOTO-2023-05-15-11-25-22.jpg', page: 1 },

    {
      id: 7,
      image: '/images/PHOTO-2023-05-15-11-31-36 (3).jpg',
      page: 1,
    },

    {
      id: 8,
      image: '/images/PHOTO-2023-05-15-11-31-36 (5).jpg',
      page: 1,
    },

    {
      id: 9,
      image: '/images/PHOTO-2023-05-15-11-31-37 (1).jpg',
      page: 2,
    },

    {
      id: 10,
      image: '/images/PHOTO-2023-05-15-11-31-37 (3).jpg',
      page: 2,
    },

    {
      id: 11,
      image: '/images/PHOTO-2023-05-15-11-31-37 (4).jpg',
      page: 2,
    },

    {
      id: 12,
      image: '/images/PHOTO-2023-05-15-11-31-37 (5).jpg',
      page: 2,
    },

    {
      id: 13,
      image: '/images/PHOTO-2023-05-15-11-31-37 (6).jpg',
      page: 2,
    },

    {
      id: 14,
      image: '/images/PHOTO-2023-05-15-11-31-37 (7).jpg',
      page: 2,
    },

    {
      id: 15,
      image: '/images/PHOTO-2023-05-15-11-31-37 (8).jpg',
      page: 2,
    },

    {
      id: 16,
      image: '/images/PHOTO-2023-05-15-11-31-37 (9).jpg',
      page: 2,
    },

    {
      id: 17,
      image: '/images/PHOTO-2023-05-15-11-31-37 (10).jpg',
      page: 3,
    },

    {
      id: 18,
      image: '/images/PHOTO-2023-05-15-11-31-37 (11).jpg',
      page: 3,
    },

    {
      id: 19,
      image: '/images/PHOTO-2023-05-15-11-31-37 (12).jpg',
      page: 3,
    },

    {
      id: 20,
      image: '/images/PHOTO-2023-05-15-11-31-37 (13).jpg',
      page: 3,
    },

    {
      id: 21,
      image: '/images/PHOTO-2023-05-15-11-31-37 (14).jpg',
      page: 3,
    },

    {
      id: 22,
      image: '/images/PHOTO-2023-05-15-11-31-37 (15).jpg',
      page: 3,
    },

    {
      id: 23,
      image: '/images/PHOTO-2023-05-15-11-31-37 (16).jpg',
      page: 3,
    },

    {
      id: 24,
      image: '/images/PHOTO-2023-05-15-11-31-37 (17).jpg',
      page: 3,
    },

    { id: 25, image: '/images/PHOTO-2023-05-15-11-31-37.jpg', page: 4 },

    {
      id: 26,
      image: '/images/PHOTO-2023-05-15-11-33-02 (1).jpg',
      page: 4,
    },

    {
      id: 27,
      image: '/images/PHOTO-2023-05-15-11-33-02 (2).jpg',
      page: 4,
    },

    {
      id: 28,
      image: '/images/PHOTO-2023-05-15-11-33-02 (3).jpg',
      page: 4,
    },

    { id: 29, image: '/images/PHOTO-2023-05-15-11-33-02.jpg', page: 4 },

    {
      id: 30,
      image: '/images/PHOTO-2023-05-15-11-34-58 (1).jpg',
      page: 4,
    },

    { id: 31, image: '/images/PHOTO-2023-05-15-11-34-58.jpg', page: 4 },
  ];

  res.json(galleryImageData);
});

app.listen(5000);
