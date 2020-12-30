const mongoose=require('mongoose');
const schema=mongoose.Schema;

const useSchema=schema({
    name:String,
    surname:String,
    nick:String,
    email:String,
    password:String,
    role:String,
    image:String
});

//exportamos el schema para usarlo en cualquier parte de la app
module.exports=mongoose.model('user', useSchema);