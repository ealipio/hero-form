var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Hello Peru!');
});

app.listen(8080, function() {
  console.log('listening on port 8080!');
});
