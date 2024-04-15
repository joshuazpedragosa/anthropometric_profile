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

route.get('/measurement_data_entry',  (req, res)=>{
    const q_code = req.query.q_code;
    const template = fs.readFileSync('views/data_entry/measure_entry.ejs', 'utf-8');
    const content = ejs.render(template, {code : q_code});

    res.render('index', {content : content});
})

route.get('/measurement', (req, res)=>{
    const template = fs.readFileSync('views/measurement/measurement.ejs', 'utf-8');
    const content = ejs.render(template);

    res.render('index', {content : content});
})

module.exports = route;