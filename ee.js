var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('request', function(request) {
  request.top = true;
});

server.on('request', function(request) {
  console.log(request);
});

server.on('error', function(err) {
  console.log(err);
});


server.emit('request', {from: "Клиент"});
server.emit('request', {from: "Ещё клиент"});
server.emit('error', new Error('mistake'));