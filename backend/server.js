const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const connectDb=require("./config/connectionDB")

const cors=require("cors") //CORS stands for Cross-Origin Resource Sharing.
//It’s a security mechanism built into web browsers that controls which domains are allowed to access resources (like APIs) from another domain. 

const PORT=process.env.PORT || 3000
connectDb()

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.use("/",require("./routes/user"))
app.use("/recipe",require("./routes/recipe"))

app.listen(PORT,(err)=>{
    console.log(`app is listening on port ${PORT}`)
})
