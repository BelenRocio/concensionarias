const fs = require('fs')
const auto = JSON.parse(fs.readFileSync(__dirname + '/data/concensionarias.json', 'utf-8'));


module.exports = {
    index : (res,req) => {
        res.send(​`Bienvenido a nuestra sucursal ${auto[0].sucursal}`);
    }
}