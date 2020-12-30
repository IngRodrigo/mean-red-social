const mongoose=require('mongoose');
const schema=mongoose.Schema;

const FollowSchema=schema(
    {
        user:{type:Schema.ObjectId, ref:'User'},
        followed:{type:Schema.ObjectId, ref:'User'}
    }
);

module.exports=mongoose.model('Follow', FollowSchema);