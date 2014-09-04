var debug = require('debug')('reactv:sockets');
var redis = require('redis');

var subscriber = redis.createClient();

function socket (io) {

  io.sockets.on('connection', function (socket) {
    debug('new connection');

    socket.on('room', function (room) {
      socket.join(room);
    });

  });

  subscriber.on('message', function(channel, data) {
    if (channel === 'logs') {
      debug('new log');
      io.sockets.in('logs').emit('log', data);
    }
  });

  subscriber.subscribe('logs');

}

module.exports = socket;