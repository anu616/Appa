
import express from "express"
const server = express();

server.all('/', (req, res)=>{

   res.send("Appa is running")

})

function alive(){
    server.listen(3000, ()=>{
       console.log("Server is online!")
    });

}

export { alive as default }