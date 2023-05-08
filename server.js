const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const data = {
    "players": ["playerOne", "playerTwo", "playerThree", "playerFour"],
    "points": ["16.3", "26.1", "7.7", "3.1"],
  };
  res.json(data);
});

app.listen(5000, () => {
  console.log('Server started on 5000');
});