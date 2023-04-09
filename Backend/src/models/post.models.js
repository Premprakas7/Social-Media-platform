const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
    // body:{type:String, require:true},
    user_id:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    content:{type:String, required:true},
    likes:{type:Number, required:true}
},
{
    versionKey:false,
    timestamps:true
}
)

module.exports=new mongoose.model("posts", postSchema)