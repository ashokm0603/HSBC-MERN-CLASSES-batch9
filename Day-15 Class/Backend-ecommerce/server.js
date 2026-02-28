const express=require("express")
const app=express()
const env=require("dotenv");
const cors=require("cors")

app.use(cors())
env.config()
const userRouter=require("./routes/UserRouter")
const productRouter=require("./routes/ProductRouter")

const PORT=process.env.PORT;
const connection=require("./config/database")
connection()

app.use(express.json())
app.use("/api",userRouter)
app.use("/api",productRouter)
//        api/register 
//        api/login
app.listen(PORT, ()=>{
    console.log("Server Running on Port :",PORT);
    
})