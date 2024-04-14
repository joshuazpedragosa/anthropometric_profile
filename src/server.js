require('dotenv').config();
const config = require('./../config/config');
const routes = require('./../src/routes/routes');
const demographics_controller = require('./controller/demographics_controller');
const measurement_controller = require('./controller/measurement_controller');
const port = process.env.PORT || 3000;
const network = require('network');

config.app.use('/', routes);
config.app.use(demographics_controller);
config.app.use(measurement_controller);

network.get_private_ip((err, ip) => {
    if (err) {
      console.error('Error retrieving IPv4 address');
      return;
    }
    config.app.listen(port, ip, ()=>{
        console.log(`Server is running at http://${ip}:${port}/`);
    });
});