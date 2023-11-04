const express= require("express");
const route= express.Router();
const userdetail=require("./database");

route.get("/",(req,res)=>{
   res.render("index")
})
// this route make for registration form
route.post("/register",async(req,res)=>{
    try {
        const data = new userdetail(req.body);
        const savedat= await data.save();
        res.render("login");
    } catch (error) {

        res.status(400).send(error);
    }
})
route.post("/login",async(req,res)=>{
    try {
        const chekemail= req.body.email;
        const databasedata= await userdetail.findOne({email:chekemail})
        res.send(databasedata)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=route;