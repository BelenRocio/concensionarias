const fs = require('fs')
const auto = JSON.parse(fs.readFileSync(__dirname + '/data/concensionarias.json', 'utf-8'));

module.exports = {
    marcas : (req,res) => {
        res.send(​`Tenemos para ofreserte nustras distintas marcas de autos!! Estas son : ${auto[0].autos.marca}​`);
    },
    marca : (req,res) => {
        let aut = auto.filter(aut => {
            return aut.id == req.params.id
        });
        if(aut[0] == undefined){
            res.send('No hay auto para mostrar')
            }else{
           res.send(​`Este es el auto que elejiste y esta es su detallada informacion: ${aut[0].autos}`);
            }
       }
}