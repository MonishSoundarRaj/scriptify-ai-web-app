const express = require('express');
const bcrypt = require('bcrypt');
const ejs = require('ejs');
const mongoose = require('mongoose');
const path = require("path");
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const _ = require('lodash');
const openAi = require('openai');

const app = express();

app.use(express.static(__dirname + '/public'));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
   res.render('index');
})

app.listen(process.env.PORT||3000,() => {
    console.log("server is up and running in PORT 3000")
})