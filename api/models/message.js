const mongoose=require('mongoose');
const schema=mongoose.Schema;

const MessageSchema=schema({
text:String,
create_at:String,
emitter:{type:Schema.ObjectId, ref:'user'},
receiver:{type:Schema.ObjectId, ref:'user'}
});

module.exports=mongoose.model('Message', MessageSchema);