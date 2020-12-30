const mongoose=require('mongoose');

const schema=mongoose.Schema;

const PublicationSchema=schema(
    {
        text:String,
        file:String,
        create_at:String,
        user:{type: Schema.ObjectId, ref:'user'}
    }
);

module.exports=mongoose.model('Publication', PublicationSchema);