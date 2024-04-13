require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    timezone: process.env.DB_TIMEZONE
});

const dbStatus = connection.connect((err)=>{
    if(err){
        console.error('Error connecting to mysql', err);
        return;
    }
    console.log('Connected to MySql');
})

const msyql_status = {
    status : dbStatus,
    connection : connection
}

module.exports = msyql_status;