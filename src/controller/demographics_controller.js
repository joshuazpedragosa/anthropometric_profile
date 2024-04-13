const express = require('express');
const route = express.Router();
const demographics_model = require('./../model/demographics_model');
const fs = require('fs');
const ejs = require('ejs');

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

        let Mean = 0;
        let Standard_deviation = 0;
        let range_min = 0;
        let range_max = 0;
        let cv_percent = 0;

        let list_age = [];
        //Mean formula
        let num_items = demographics_data.length;
        let total_age = 0;

        for(const data of demographics_data){
            total_age += data.age;
            list_age.push(data.age);
        }

        Mean = total_age/num_items;
        //------------------------------------------------

        //Standard Deviation
        let total_sq_diff = 0;

        for(const data of demographics_data){
            let mean_diff = data.age - Mean;
            let sq_diff = mean_diff * mean_diff;
            total_sq_diff += sq_diff;
        }

        let mean_sq_diff = total_sq_diff/num_items;
        Standard_deviation = Math.sqrt(mean_sq_diff);
        //------------------------------------------------

        //Range Min
        range_min = Math.min(...list_age);
        //Range Max
        range_max = Math.max(...list_age);
        //------------------------------------------------
        //CV(%)
        cv_percent = (Standard_deviation/Mean) * 100;

        let statistics = {
            mean : Mean.toFixed(2),
            standard_deviation : Standard_deviation.toFixed(2),
            range_min : range_min.toFixed(2),
            range_max : range_max.toFixed(2),
            cv_percent : cv_percent.toFixed(2)
        }

        res.status(200).json(statistics);
        
    }catch(error){
        res.status(500).json({msg : 'Internal Server Error'});
        console.error('Error: ', error);
    }
})

module.exports = route;