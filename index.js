require('dotenv').config();

const express = require('express');

console.log('message: ', process.env.MSG)

const server = express(); // creating an instance of an express server

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'Web 23' });
});

const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`\n Server running on ${port} port \n`);
});
