const express= require("express")

const route=require("./router")
const app = express();
const port = 3300;



app.use(express.json());
// form ka data ko database my add krny k liyye
app.use(express.urlencoded({extended:false}))
//  ub hum ejs temple ko use kry gy 
app.set("view engine", "ejs")
// now i am making a server
app.use(route)
app.listen(port,(req,res)=>{
      console.log("server is runnig on port no 3300")
})


