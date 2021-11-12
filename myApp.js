var express = require('express');
var app = express();
require('dotenv').config();

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
  })

  app.get('/json', (req, res) => {    
    res.json({"message": process.env.MESSAGE_STYLE == "uppercase" ? "HELLO JSON" : "Hello json"});
  })

 



































 module.exports = app;
