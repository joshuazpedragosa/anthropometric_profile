const database = require('./../../config/database');
const db = database.connection;

class Measurement{
    static getMeasurements(){
        return new Promise((resolve, reject)=>{
            const sql = `SELECT * FROM respondent_data`;

            db.query(sql, (error, result)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

    static searchData(data){
        return new Promise((resolve, reject)=>{
            const {column, value} = data;
            const sql = `SELECT * FROM respondent_data WHERE ?? LIKE ?`;

            db.query(sql, [column, `%${value}%`],(error, result)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

    static saveMeasurementData(data){
        return new Promise((resolve, reject)=>{
            const sql = `INSERT INTO respondent_data VALUES(?)`;

            db.query(sql, [data],(error, result)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }
}

module.exports = Measurement;