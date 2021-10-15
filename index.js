const express = require('express');
const app = express();
const http = require('http');
const server = express();
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = 3000;


server.get("/", function(req,res){
    res.send("hello world");
})


server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
})


{GET}
app.get('/', (req, res) => {
    
  })
  


