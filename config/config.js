require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('static'));
app.set('view engine', 'ejs');
app.set('views', './views');

const config = {
    app : app,
}

module.exports = config;