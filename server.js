const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
require('dotenv').config();

console.log(`Hi my name is ${process.env.KEY}`);

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + '/dist'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);