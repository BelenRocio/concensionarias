const fs = require('fs')
const auto = JSON.parse(fs.readFileSync(__dirname + '/data/concensionarias.json', 'utf-8'));


module.exports = {
    index : (req,res) => {
        res.send(​`Bienvenido a nuestra sucursal ${auto[0].sucursal} . Su direccion es ${auto[0].direccion} y su telefono es ${auto[0].telefono}`);
    },
    sucursal : (req,res) => {
        let aut = auto.filter(aut => {
            return aut.id == req.params.id
        });
         if(aut[0] == undefined){
         res.send('No hay sucursales para mostrar')
         }else{
        res.send(​`Bienvenido a nuestra sucursal ${aut[0].sucursal}. Su direccion es ${aut[0].direccion} y su telefono es ${aut[0].telefono}. Nustros autos disponibles son ${aut[0].autos}`);
         }
    }
}