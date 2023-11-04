//  Making a database

const mongoose= require("mongoose")
//  Now make a connection 

mongoose.connect("mongodb://127.0.0.1:27017/project1").then(()=>{
    console.log("connection is succefull")
}).catch((e)=>{
    console.log(e)
})

//  now we make a schema

const schema = new mongoose.Schema({
    name:{
        type:String
        
    },
    email:{
        type:String
        
    },
    phone:{
        type:Number
        
        
    },
    password:{
        type:String
        
    }

})

//  Now we make a table 

const usermodel = mongoose.model("userdetail",schema)

module.exports=usermodel;
