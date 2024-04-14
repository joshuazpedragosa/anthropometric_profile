const database = require('./../../config/database');
const db = database.connection;

class Demographics{

    static saveData(data){
        return new Promise((resolve, reject)=>{
            const {
                q_code, date, surname, given_name, 
                middle_name, age, sex, maritalStat,
                pwd, phone_num, barangay, municipality,
                province, region, educ_attainment, org_name,
                position, farm_commodity, farm_activities,
                farm_involvement, proprietorship, farm_area,
                typesOfMachine, yearsExp, occupationType
            } = data;

            const sql = `INSERT INTO demographics (
                            q_code, date, sur_name, given_name, middle_name,
                            age, sex, marital_stat, pwd, contact_num, barangay,
                            municipality, province, region, educational_attainment,
                            org_name, position, farm_commodity, farming_act, farm_involvement,
                            proprietorship, farm_area, machinery_types, years_exp,
                            farm_primary_secondary 
                        ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

            db.query(sql, [
                q_code, date, surname, given_name, middle_name, age, sex, maritalStat,
                pwd, phone_num, barangay, municipality, province, region, educ_attainment,
                org_name, position, farm_commodity, farm_activities, farm_involvement, proprietorship,
                farm_area, typesOfMachine, yearsExp, occupationType 
            ],(error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    static demographicsData(){
        return new Promise((resolve, reject)=>{
            const sql = `SELECT * FROM demographics`;

            db.query(sql, (error, result)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }
    
    static checkDemographics(data){
        return new Promise((resolve, reject)=>{
            const {q_code, surname, given_name, middle_name} = data;

            const sql = `SELECT id FROM demographics WHERE q_code = ?
                         AND sur_name = ? AND given_name = ? AND middle_name = ? LIMIT 1`;
            
            db.query(sql, [q_code, surname, given_name, middle_name], (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    result.length > 0 ? resolve(true) : resolve(false);
                }
            })
        })
    }

    static seacrhByQCodeORName(data){
        return new Promise((resolve, reject)=>{

            const sql = `SELECT * FROM demographics WHERE q_code LIKE ?
                         OR sur_name LIKE ? OR given_name LIKE ? OR middle_name LIKE ?`;
            
            db.query(sql, [`%${data}%`,`%${data}%`,`%${data}%`,`%${data}%`], (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    static seacrhByBarangay(data){
        return new Promise((resolve, reject)=>{

            const sql = `SELECT * FROM demographics WHERE barangay LIKE ?`;
            
            db.query(sql, [`%${data}%`], (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    static seacrhByAge(data){
        return new Promise((resolve, reject)=>{

            const sql = `SELECT * FROM demographics WHERE age LIKE ?`;
            
            db.query(sql, [`%${data}%`], (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    static seacrhByProvince(data){
        return new Promise((resolve, reject)=>{

            const sql = `SELECT * FROM demographics WHERE province LIKE ?`;
            
            db.query(sql, [`%${data}%`], (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    static seacrhBymunicipality(data){
        return new Promise((resolve, reject)=>{

            const sql = `SELECT * FROM demographics WHERE municipality LIKE ?`;
            
            db.query(sql, [`%${data}%`], (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    static seacrhByBFarmInvolvement(data){
        return new Promise((resolve, reject)=>{

            const sql = `SELECT * FROM demographics WHERE farm_involvement LIKE ?`;
            
            db.query(sql, [`%${data}%`], (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }
}

module.exports = Demographics;