const express=require("express");
const mongoose=require("mongoose");
const RegisterModel=require("../models/RegisterModel");
const router=express.Router();
router.post("/save",(req,res)=>{
    res.send("Hello from Register save");
});

module.exports=router;
