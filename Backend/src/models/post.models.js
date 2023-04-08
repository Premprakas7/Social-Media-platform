const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    content:{type:String, required:true},
    likes:{type:Number, required:true}
},
{
    timestamps:true
}
)

module.exports=new mongoose.model("post", postSchema)