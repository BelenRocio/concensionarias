const fs = require('fs')
const auto = JSON.parse(fs.readFileSync(__dirname + '/data/concensionarias.json', 'utf-8'));

module.exports = {
    autos : (res,req) => {
        res.send(`Estos son nuestros autos ${aut[0].autos}.`)
    },
    marca : (req,res) => {
        let aut = auto.filter(aut => {
            return aut.id == req.params.id
        });
        if(aut[0] == undefined){
            res.send('No hay auto para mostrar')
            }else{
           res.send(​`Este es el auto que elejiste y esta es la informacion de su marca: ${aut[0].autos.marca}`);
        }
    }
}