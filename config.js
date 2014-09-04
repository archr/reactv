var expressWinston = require('express-winston');
var winston = require('winston');
var express = require('express');
var logger = require ('morgan');
var path = require('path');

require('winston-redis').Redis;

function config (app) {
  app.use(
    expressWinston.logger({
      transports: [new (winston.transports.Redis)({
        container: 'reactv:logs',
        channel: 'logs'
      })]
    })
  );

  app.use(express.static(path.join(__dirname, './public')));
  app.use(logger('dev'));

}

module.exports = config;