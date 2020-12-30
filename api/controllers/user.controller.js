//importamos el modelo
const User=require('../models/user');

function home(req, res){
    res.status(200).send({
        message:'Hola mundo desde el servidor de nodejs'
    })
};

function pruebas(req, res){
    console.log(req.body);
    res.status(200).send({
        message:'Accion de pruebas en el servidor de nodejs'
    })
};


//exportamos los metodos
module.exports={
    home,
    pruebas
}