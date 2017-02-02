var socket = io();

socket.on('connect',function(){
	console.log('Client connected to the server');
});

socket.on('message', function(message){
	console.log('New message is: '+message.text);
});
