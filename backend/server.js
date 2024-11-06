const express=require("express");
const mongoose=require("mongoose");
const RegisterRouter=require("./routes/RegisterRoutes");
const app=express();
mongoose.connect("mongodb://localhost:27017/mydb")
.then(()=>{
    console.log("database connected successfully");
    app.listen(4000,()=>{
        console.log("Server is running on port 4000")
    });

}).catch(()=>{
    console.log("Something went wrong");
})

app.use("/register",RegisterRouter);
