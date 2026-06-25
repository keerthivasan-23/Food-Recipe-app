const mongoose=require("mongoose")
const connectDb=async()=>{
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>console.log("connected..."))
    console.log(mongoose.connection.name);
}

module.exports=connectDb