const express=require("express")
const routes=require("./Router")
const bodyParser=require('body-parser')
const Dbconnection=require("./dbconnection.js")
const cors=require('cors')
const app=express()
const port=4000;
app.use(bodyParser.json())
app.use(cors())
app.use("/",routes)

app.listen(4000,()=>{
    console.log("server started at 4000")
})       