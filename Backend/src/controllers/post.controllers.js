const express=require("express");
const {body, validationResult}=require("express-validator");
const Post=require("../models/post.models");
const router=express.Router();


router.get("", async(req,res)=>{
            try{
                const posts= await Post.find().populate({path:"user_id"}).lean().exec();
                                     return res.status(200).send({posts})
                }
                catch(err){
                    return res.status(500).send({err})
                    }
})

router.post("",
body("content").isLength({min:1, max:300}),
body("likes").isNumeric().custom((val)=>{if(val<0){throw new Error("Incorrect")} return true}), 

async(req,res)=>{
    try{
        const errors=validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(400).send({errors:errors.array()})
                    }
        const posts=await Post.create(req.body);
        return res.status(200).send({posts});
    }catch(err){
        return res.status(500).send({err})

    }
})

router.get("/:id", async(req,res)=>{
    try{
        const posts=await Post.findById(req.params.id).lean().exec();
        return res.status(200).send({posts})

    }catch(err){
        return res.status(500).send({err})
    }
})


router.put("/:id", async(req,res)=>{
    try{
        const posts=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send({posts})
    }catch(err){
        return res.status(500).send({err})
    }
})

router.delete("/:id", async(req,res)=>{
    try{
        const posts=await Post.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({posts})
    }catch(err){
        return res.status(500).send({err})
    }
})

module.exports=router;