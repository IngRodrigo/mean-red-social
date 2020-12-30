
let mongoose=require('mongoose');

const app=require('./app');
const port=3800;

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean_social')
        .then(()=>{
            console.log("Conexion existosa!!");
            //crear servidor
            app.listen(port, ()=>{
                console.log(`Servidor creado corriendo en http://localhost:${port}`);
            })
        })  
        .catch(error=>{
            console.log(`No se pudo conectar, detalle: ${error}`);
        })