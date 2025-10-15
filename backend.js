let express = require("express")
const { json } = require("stream/consumers")

const  moongoose = require("mongoose")


let Backendapp =  express()
Backendapp.use(express.json())

async function Savingtodtabase(username) {
    await     moongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8")
  
     let sechema =  new  moongoose.Schema({
      username:String
     })

     

     let savingModel = await moongoose.model("sechema", sechema)
     
  let instance =    new savingModel({
      username:username
     })
     
     instance.save()

     
         
    
}




Backendapp.get("/contacts" , (req , res)=>{
  
    res.send({name:"baqar" , fname :"liaquat zafar farooqui"})

})


Backendapp.post("/post",(req , res)=>{
       
  let data =   req.body.username
  Savingtodtabase(data)

  console.log("Alhamdullilh data has been saved to the database")
})

Backendapp.listen(3000 ,()=>{

    console.log("app is running")
})