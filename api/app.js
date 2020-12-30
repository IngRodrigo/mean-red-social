const expres=require('express');//servidor
const bodyParse=require('body-parser');//parse json

const app=expres();

//cargar rutas
let user_routes=require('./routes/user.routes');

//midelwares
//convertir todo lo que llega por url a json
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());


//rutas
app.use('/api', user_routes);
//exportar la configuracion
module.exports=app;