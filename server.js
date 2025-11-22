const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/cars.json', (req, res) => {
  res.sendFile(__dirname + '/cars.json');
});

app.listen(port, () => {
  console.log(Server running on port ${port});
});