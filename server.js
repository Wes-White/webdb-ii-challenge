const express = require('express');

const carsRouter = require('./cars/cars-router');

const server = express();

server.use(express.json());

server.use('/cars', carsRouter);

server.get('/', (req, res) => {
  res.send('<h1> Web DB Challenge II<h1>');
});

module.exports = server;
