const express = require('express');
const route = express.Router();
const measurement_model = require('./../model/measurement_model');
const fs = require('fs');
const ejs = require('ejs');
const statistics_measure = require('./../services/statistics');

route.get('/get_measurements', async(req, res)=>{
    try{
        const measurements = await measurement_model.getMeasurements();

        const template = fs.readFileSync('views/measurement/measurements_tbl.ejs', 'utf-8');
        const content = ejs.render(template, {data : measurements});

        res.status(200).json({data : content});
    }catch(error){
        console.error('Error: ', error);
        res.status(500).json({msg : 'Internal Server Error'});
    }
})

route.get('/get_measurement_stat', async(req, res)=>{
    try{
        const measurements = await measurement_model.getMeasurements();

        let key_array = [
            "Standing_Height",
            "Standing_Eye_Height",
            "Standing_Shoulder_Height",
            "Standing_Elbow_Height",
            "Fingertip_Height",
            "Standing_Knee_Height",
            "Knuckle_Height",
            "Crotch_Height",
            "Standing_Hip_Breadth",
            "Waist_Girth",
            "Chest_Girth",
            "Standing_Shoulder_Breadth",
            "Head_Circumference",
            "Standing_Upward_Reach",
            "Arm_Length",
            "Sideways_Reach",
            "Total_Span",
            "Standing_Bust_Height",
            "Sitting_Height",
            "Eye_Height_Above_Seat",
            "Shoulder_to_Elbow_Length",
            "Elbow_Height_Above_Seat",
            "Seat_Height",
            "Sitting_Knee_Height",
            "Thigh_Clearance",
            "Buttock_to_Poplietal_Length",
            "Buttock_to_Knee_Length",
            "Belly_Depth",
            "Chest_Depth",
            "Forearm_to_Hand_Length",
            "Forward_Reach",
            "Sitting_Upward_Reach",
            "Sitting_Bust_Height",
            "Breadth_Accross_Elbow",
            "Sitting_Hip_Breadth",
            "Hand_Length",
            "Hand_Breadth",
            "Foot_Length",
            "Foot_Breadth",
            "Grip_Diameter",
            "Weight"
        ]
        

        let measurement_object = {
            Standing_Height: [],
            Standing_Eye_Height: [],
            Standing_Shoulder_Height: [],
            Standing_Elbow_Height: [],
            Fingertip_Height: [],
            Standing_Knee_Height: [],
            Knuckle_Height: [],
            Crotch_Height: [],
            Standing_Hip_Breadth: [],
            Waist_Girth: [],
            Chest_Girth: [],
            Standing_Shoulder_Breadth: [],
            Head_Circumference: [],
            Standing_Upward_Reach: [],
            Arm_Length: [],
            Sideways_Reach: [],
            Total_Span: [],
            Standing_Bust_Height: [],
            Sitting_Height: [],
            Eye_Height_Above_Seat: [],
            Shoulder_to_Elbow_Length: [],
            Elbow_Height_Above_Seat: [],
            Seat_Height: [],
            Sitting_Knee_Height: [],
            Thigh_Clearance: [],
            Buttock_to_Poplietal_Length: [],
            Buttock_to_Knee_Length: [],
            Belly_Depth: [],
            Chest_Depth: [],
            Forearm_to_Hand_Length: [],
            Forward_Reach: [],
            Sitting_Upward_Reach: [],
            Sitting_Bust_Height: [],
            Breadth_Accross_Elbow: [],
            Sitting_Hip_Breadth: [],
            Hand_Length: [],
            Hand_Breadth: [],
            Foot_Length: [],
            Foot_Breadth: [],
            Grip_Diameter: [],
            Weight: []
        };

        for (const data of measurements){
            measurement_object.Standing_Height.push(data.Standing_Height);
            measurement_object.Standing_Eye_Height.push(data.Standing_Eye_Height);
            measurement_object.Standing_Shoulder_Height.push(data.Standing_Shoulder_Height);
            measurement_object.Standing_Elbow_Height.push(data.Standing_Elbow_Height);
            measurement_object.Fingertip_Height.push(data.Fingertip_Height);
            measurement_object.Standing_Knee_Height.push(data.Standing_Knee_Height);
            measurement_object.Knuckle_Height.push(data.Knuckle_Height);
            measurement_object.Crotch_Height.push(data.Crotch_Height);
            measurement_object.Standing_Hip_Breadth.push(data.Standing_Hip_Breadth);
            measurement_object.Waist_Girth.push(data.Waist_Girth);
            measurement_object.Chest_Girth.push(data.Chest_Girth);
            measurement_object.Standing_Shoulder_Breadth.push(data.Standing_Shoulder_Breadth);
            measurement_object.Head_Circumference.push(data.Head_Circumference);
            measurement_object.Standing_Upward_Reach.push(data.Standing_Upward_Reach);
            measurement_object.Arm_Length.push(data.Arm_Length);
            measurement_object.Sideways_Reach.push(data.Sideways_Reach);
            measurement_object.Total_Span.push(data.Total_Span);
            measurement_object.Standing_Bust_Height.push(data.Standing_Bust_Height);
            measurement_object.Sitting_Height.push(data.Sitting_Height);
            measurement_object.Eye_Height_Above_Seat.push(data.Eye_Height_Above_Seat);
            measurement_object.Shoulder_to_Elbow_Length.push(data.Shoulder_to_Elbow_Length);
            measurement_object.Elbow_Height_Above_Seat.push(data.Elbow_Height_Above_Seat);
            measurement_object.Seat_Height.push(data.Seat_Height);
            measurement_object.Sitting_Knee_Height.push(data.Sitting_Knee_Height);
            measurement_object.Thigh_Clearance.push(data.Thigh_Clearance);
            measurement_object.Buttock_to_Poplietal_Length.push(data.Buttock_to_Poplietal_Length);
            measurement_object.Buttock_to_Knee_Length.push(data.Buttock_to_Knee_Length);
            measurement_object.Belly_Depth.push(data.Belly_Depth);
            measurement_object.Chest_Depth.push(data.Chest_Depth);
            measurement_object.Forearm_to_Hand_Length.push(data.Forearm_to_Hand_Length);
            measurement_object.Forward_Reach.push(data.Forward_Reach);
            measurement_object.Sitting_Upward_Reach.push(data.Sitting_Upward_Reach);
            measurement_object.Sitting_Bust_Height.push(data.Sitting_Bust_Height);
            measurement_object.Breadth_Accross_Elbow.push(data.Breadth_Accross_Elbow);
            measurement_object.Sitting_Hip_Breadth.push(data.Sitting_Hip_Breadth);
            measurement_object.Hand_Length.push(data.Hand_Length);
            measurement_object.Hand_Breadth.push(data.Hand_Breadth);
            measurement_object.Foot_Length.push(data.Foot_Length);
            measurement_object.Foot_Breadth.push(data.Foot_Breadth);
            measurement_object.Grip_Diameter.push(data.Grip_Diameter);
            measurement_object.Weight.push(data.Weight);

        }

        let statistics_arr = [];

        for(let x = 0; x < key_array.length; x++){
            let _key = key_array[x];
            let mean = await statistics_measure.mean(measurement_object[_key]);
            let range_max = await statistics_measure.rangeMax(measurement_object[_key]);
            let range_min = await statistics_measure.rangeMin(measurement_object[_key]);
            let mode = await statistics_measure.mode(measurement_object[_key]);
            let sd = await statistics_measure.standardDeviation(measurement_object[_key], mean);
            let cv_percent = await statistics_measure.cvPercent(sd,mean);
            
            statistics_arr.push({
                percentile_95th : await statistics_measure.percentile95th(measurement_object[_key]),
                percentile50th : await statistics_measure.percentile50th(measurement_object[_key]),
                percentile5th : await statistics_measure.percentile5th(measurement_object[_key]),
                mean : mean.toFixed(2),
                rangeMax : range_max.toFixed(2),
                rangeMin : range_min.toFixed(2),
                mode: mode,
                sd : sd.toFixed(2),
                cv_percent : cv_percent.toFixed(2)
            })
        }

        const template = fs.readFileSync('views/measurement/stat_measurement.ejs', 'utf-8');
        const content = ejs.render(template, {data : statistics_arr});

        res.status(200).json({data : content});
    }catch(error){
        console.error('Error: ', error);
        res.status(500).json({msg : 'Internal Server Error'});
    }
})

module.exports = route;