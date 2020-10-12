//Make connection
var PORT =  40000;
//var socket = io.connect("http://localhost:"+PORT);
var socket = io.connect("wss://socket.bitpanda.com");
console.log("welcome chatjs");
console.log("Connection is okay");
console.log(socket);
console.log(io);
//console.log(io.util);
// Query Dom
var message = document.getElementById('message');
    handle = document.getElementById('handle'),
    btn = document.getElementById('send');

var io2 = require('socket.io-client');
var socket2 = io('wss://socket.bitpanda.com');
// piggyback using the event-emitter bundled with socket.io client
var patch = require('socketio-wildcard')(io.Manager);
patch(socket2);

socket2.on('*', function(){ console.log("Hellooo"); })

// Emit Events
btn.addEventListener('click',function(){
  //Emit Message
  try {
    console.log("Trying emmiting");
    socket.emit('chat',{
      message : message.value,
      handle : handle.value,
    });
	console.log("mitted");
  }
  catch(err) {
  console.log(err);
  }

});


// Listen for Events
socket.on('chat',function(data){
  output.innerHTML += '<p><strong>'+data.handle+"</strong>" + data.message;
});
