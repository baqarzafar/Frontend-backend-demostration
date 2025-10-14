let express = require("express")
const { json } = require("stream/consumers")


// const bodyParser = require('body-parser');


let Backendapp =  express()


Backendapp.get("/contacts" , (req , res)=>{
  
    res.send({name:"baqar" , fname :"liaquat zafar farooqui"})

})


Backendapp.post("/post",(req , res)=>{
       
  let data =   res.json()
  console.log(data)
})

Backendapp.listen(3000 ,()=>{

    console.log("app is running")
})