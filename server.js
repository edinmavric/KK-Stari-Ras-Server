const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ "users": ["playerOne", "playerTwo", "playerThree", "playerFour"] });
});

app.listen(5000, () => {
  console.log('Server started on 5000');
});
