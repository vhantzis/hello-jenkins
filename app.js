var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello jenkins test');
});

app.listen(5000);

module.exports = app;
