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
}

module.exports = Measurement;