var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 3000;

require('./sockets')(io);
require('./config')(app);

server.listen(port, function(){
  console.log('App running in port ' + port);
});