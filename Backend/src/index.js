const express=require("express");

const usersController=require("./controllers/user.controllers");
const postsController=require("./controllers/post.controllers");
const app=express();

app.use(express.json())

app.use("/users",usersController);
app.use("/posts", postsController);

module.exports=app;