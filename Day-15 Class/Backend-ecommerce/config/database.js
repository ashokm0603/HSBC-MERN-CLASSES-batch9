const mongoose=require("mongoose");

const connection=async()=>{
    try {
        await mongoose.connect(process.env.MongoDB_URL)
        console.log("Database Connected Successfully..");
        
    } catch (err) {
        console.log("Failed to Connect DB");
    }
}


module.exports=connection;