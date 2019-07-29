const express = require('express');

const app = express();

const port = 3600;

app.get('/', function(req, res) {
  res.send('Hello Peru!');
});

app.listen(port, () => {
  console.log(`Listening connections by ${port}`);
});
