const express=require("express")
const app=express()
const env=require("dotenv");
env.config()

const PORT=process.env.PORT;
const connection=require("./config/database")

connection()
app.listen(PORT, ()=>{
    console.log("Server Running on Port :",PORT);
    
})