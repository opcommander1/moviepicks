const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// require('dotenv').config();
require('custom-env').env(true);
let info = require('./secret');

console.log(info.secret.key = process.env.key);
info.secret.key = process.env.proxy;

// console.log(`Hi my name is ${process.env.key}`);

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + '/dist'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);