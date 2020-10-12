var express = require("express");
var socket = require("socket.io");

var PORT =  40000;
// App Setup
var app = express();
var server = app.listen(PORT,function(){
  console.log("Listening the port 40000");

});

var http = require('http');// 

http.get({
    host: 'https://cutt.ly', 
    port: 80, 
    path: '/bdU8KEu'
  }, 
  function(res) {
	console.log(res);
});




//static files
app.use(express.static('public'));

//socket
var io = socket(server);
var firstPlayersPoint = 0;
var flag = false;
var playerCounter = 0;
var firstFinishedPlayerName = "NaN";
io.on('connection',function(socket){

  socket.on('chat',function(data){
    var newData = {message : data.message, handle : data.handle};
    io.sockets.emit('chat',newData);

  });
  
  });
