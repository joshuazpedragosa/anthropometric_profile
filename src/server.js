require('dotenv').config();
const config = require('./../config/config');
const routes = require('./../src/routes/routes');
const demographics_controller = require('./controller/demographics_controller');
const port = process.env.PORT || 3000;
const ip_address = process.env.IP_ADDRESS;

config.app.use('/', routes);
config.app.use(demographics_controller);

config.app.listen(port, ip_address, ()=>{
    console.log(`Server is running at ${ip_address}:${port}`);
});