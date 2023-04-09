const express=require("express")
const {body, validationResult}=require("express-validator")
const User=require("../models/user.models")
const router=express.Router();



router.get("/", async(req,res)=>{
    try{
        const users=await User.find().lean().exec();
        return res.status(200).send({users})
    }catch(err){
        return res.status(500).send(err);
    }
})

router.post("/",
body("name").isLength({min:1, max:50}),
body("email").isEmail(),
body("bio").isLength({min:0, max:200}),
async (req,res)=>{
    try{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).send({errors:errors.array()})
        }
        const users=await User.create(req.body)
        return res.status(200).send({ users});
    }
    catch(err){
        return res.status(500).send({ message: err.message });
    }
})

router.get("/:id", async(req,res)=>{
    try{
        const users=await User.findById(req.params.id).lean().exec();
        return res.status(200).send({users})

    }catch(err){
        return res.status(500).send({err})
    }
})

router.put("/:id", async(req,res)=>{
    try{
        const users=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send({users})
    }catch(err){
        return res.status(500).send({err})
    }
})

router.delete("/:id", async(req,res)=>{
    try{
        const users=await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({users})
    }catch(err){
        return res.status(500).send({err})
    }
})

module.exports=router;