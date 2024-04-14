const express = require('express');
const route = express.Router();
const demographics_model = require('./../model/demographics_model');
const fs = require('fs');
const ejs = require('ejs');
const statistics_measure = require('./../services/statistics');

route.post('/save_data', async(req, res)=>{
    try{
        const data = req.body;

        const dataIsInserted = await demographics_model.checkDemographics(data);

        if(dataIsInserted){
            return res.status(200).json({msg : 'Data already inserted!'});
        }

        await demographics_model.saveData(data);

        res.status(200).json({msg : 'Data inserted successfuly!'});
    }catch(error){
        console.error('SQL Error: ', error)
        res.status(500).json({msg : 'Internal Server Error.'})
    }
});

route.get('/get_demographics', async(req, res)=>{
    try{
        const demographics = await demographics_model.demographicsData();

        const template = fs.readFileSync('views/demographics/demographics_tbl.ejs', 'utf-8');
        const content = ejs.render(template, {data : demographics});

        res.status(200).json({data : content});
    }catch(error){
        console.error('Error: ', error);
        res.status(500).json({msg : 'Internal Server Error'});
    }
})

route.get('/demographics_stat', async(req, res)=>{
    try{

        const demographics_data = await demographics_model.demographicsData();
        let list_age = [];

        for(const data of demographics_data){
            list_age.push(data.age);
        }

        let Mean = await statistics_measure.mean(list_age);
        let Standard_deviation = await statistics_measure.standardDeviation(list_age, Mean);
        let range_min = await statistics_measure.rangeMin(list_age);
        let range_max = await statistics_measure.rangeMax(list_age);
        let cv_percent = await statistics_measure.cvPercent(Standard_deviation, Mean);
        let percentile_5th = await statistics_measure.percentile5th(list_age);
        let percentile_50th = await statistics_measure.percentile50th(list_age);
        let percentile_95th = await statistics_measure.percentile95th(list_age);

        let statistics = {
            mean : Mean.toFixed(2),
            standard_deviation : Standard_deviation.toFixed(2),
            range_min : range_min.toFixed(2),
            range_max : range_max.toFixed(2),
            cv_percent : cv_percent.toFixed(2),
            percentile_5th : percentile_5th,
            percentile_50th : percentile_50th,
            percentile_95th : percentile_95th
        }

        res.status(200).json(statistics);
        
    }catch(error){
        res.status(500).json({msg : 'Internal Server Error'});
        console.error('Error: ', error);
    }
})

route.post('/search_qcode_name', async(req, res)=>{
    try{

        const data = req.body.search;
        const search_result = await demographics_model.seacrhByQCodeORName(data);

        const template = fs.readFileSync('views/demographics/demographics_tbl.ejs', 'utf-8');
        const content = ejs.render(template, {data : search_result});

        res.status(200).json({data : content});
        
    }catch(error){
        res.status(500).json({msg : 'Internal Server Error'});
        console.error('Error: ', error);
    }
})

route.post('/search_barangay', async(req, res)=>{
    try{

        const data = req.body.search;
        const search_result = await demographics_model.seacrhByBarangay(data);

        const template = fs.readFileSync('views/demographics/demographics_tbl.ejs', 'utf-8');
        const content = ejs.render(template, {data : search_result});

        res.status(200).json({data : content});
        
    }catch(error){
        res.status(500).json({msg : 'Internal Server Error'});
        console.error('Error: ', error);
    }
})

route.post('/search_age', async(req, res)=>{
    try{

        const data = req.body.search;
        const search_result = await demographics_model.seacrhByAge(data);

        const template = fs.readFileSync('views/demographics/demographics_tbl.ejs', 'utf-8');
        const content = ejs.render(template, {data : search_result});

        res.status(200).json({data : content});
        
    }catch(error){
        res.status(500).json({msg : 'Internal Server Error'});
        console.error('Error: ', error);
    }
})

route.post('/search_province', async(req, res)=>{
    try{

        const data = req.body.search;
        const search_result = await demographics_model.seacrhByProvince(data);

        const template = fs.readFileSync('views/demographics/demographics_tbl.ejs', 'utf-8');
        const content = ejs.render(template, {data : search_result});

        res.status(200).json({data : content});
        
    }catch(error){
        res.status(500).json({msg : 'Internal Server Error'});
        console.error('Error: ', error);
    }
})

route.post('/search_municipality', async(req, res)=>{
    try{

        const data = req.body.search;
        const search_result = await demographics_model.seacrhBymunicipality(data);

        const template = fs.readFileSync('views/demographics/demographics_tbl.ejs', 'utf-8');
        const content = ejs.render(template, {data : search_result});

        res.status(200).json({data : content});
        
    }catch(error){
        res.status(500).json({msg : 'Internal Server Error'});
        console.error('Error: ', error);
    }
})

route.post('/search_farm_involvement', async(req, res)=>{
    try{

        const data = req.body.search;
        const search_result = await demographics_model.seacrhByBFarmInvolvement(data);

        const template = fs.readFileSync('views/demographics/demographics_tbl.ejs', 'utf-8');
        const content = ejs.render(template, {data : search_result});

        res.status(200).json({data : content});
        
    }catch(error){
        res.status(500).json({msg : 'Internal Server Error'});
        console.error('Error: ', error);
    }
})

module.exports = route;