require('dotenv').config();
const config = require('./../config/config');
const routes = require('./../src/routes/routes');
const port = process.env.PORT || 3000;
const ip_address = process.env.IP_ADDRESS;

config.app.use('/', routes);

config.app.listen(port, ip_address, ()=>{
    console.log(`Server is running at ${ip_address}:${port}`);
});