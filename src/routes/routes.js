const express = require('express');
const route = express.Router();
const fs = require('fs');
const ejs = require('ejs');

route.get('/',  (req, res)=>{
    const template = fs.readFileSync('views/demographics/demographics.ejs', 'utf-8');
    const content = ejs.render(template);

    res.render('index', {content : content});
})

route.get('/data_entry',  (req, res)=>{
    const template = fs.readFileSync('views/data_entry/data_entry.ejs', 'utf-8');
    const content = ejs.render(template);

    res.render('index', {content : content});
})

module.exports = route;