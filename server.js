const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const data = [
    {
      name: 'Veljko Djurovic',
      jerseyNumber: 8,
      height: '6-9',
      weight: 250,
      points: 25.0,
      assists: 7.7,
      rebounds: 7.9,
      position: 'Krilo',
    },

    {
      name: 'Muhamed Salihovic',
      jerseyNumber: 7,
      height: '6-3',
      weight: 185,
      points: 32.0,
      assists: 5.8,
      rebounds: 5.5,
      position: 'Bek',
    },

    {
      name: 'Vladan Pantovic',
      jerseyNumber: 9,
      height: '6-10',
      weight: 240,
      points: 28.1,
      assists: 5.9,
      rebounds: 7.3,
      position: 'Krilo',
    },

    {
      name: 'Zeljko Milic',
      jerseyNumber: 13,
      height: '6-5',
      weight: 220,
      points: 25.2,
      assists: 11.3,
      rebounds: 5.9,
      position: 'Bek',
    },

    {
      name: 'Asim Djulovic',
      jerseyNumber: 5,
      height: '6-7',
      weight: 225,
      points: 25.7,
      assists: 4.9,
      rebounds: 6.7,
      position: 'Krilo',
    },

    {
      name: 'Kadir Zornic',
      jerseyNumber: 1,
      height: '6-7',
      weight: 230,
      points: 27.7,
      assists: 8.6,
      rebounds: 8.0,
      position: 'Bek',
    },

    {
      name: 'Edin Mavric',
      jerseyNumber: 16,
      height: '7-0',
      weight: 280,
      points: 28.5,
      assists: 3.5,
      rebounds: 10.6,
      position: 'Krilo',
    },

    {
      name: 'Enis Djulovic',
      jerseyNumber: 15,
      height: '7-0',
      weight: 284,
      points: 26.4,
      assists: 8.3,
      rebounds: 10.8,
      position: 'Centar',
    },

    {
      name: 'Besim Bruncevic',
      jerseyNumber: 10,
      height: '6-2',
      weight: 195,
      points: 28.8,
      assists: 7.5,
      rebounds: 4.2,
      position: 'Bek',
    },

    {
      name: 'Tadija Nikolic',
      jerseyNumber: 4,
      height: '6-2',
      weight: 195,
      points: 27.4,
      assists: 6.3,
      rebounds: 4.8,
      position: 'Bek',
    },

    {
      name: 'Kosta Petrovic',
      jerseyNumber: 0,
      height: '6-1',
      weight: 180,
      points: 25.3,
      assists: 9.4,
      rebounds: 3.9,
      position: 'Krilo',
    },

    {
      name: 'Ridvan Tutic',
      jerseyNumber: 14,
      height: '6-11',
      weight: 235,
      points: 30.3,
      assists: 6.4,
      rebounds: 11.9,
      position: 'Centar',
    },
  ];
  res.json(data);
});

app.listen(5000);
