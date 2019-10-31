const express = require('express');

const server = express(); // creating an instance of an express server

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'Web 23' });
});

server.listen(4000, () => {
  console.log('\n Server running on port 4000 \n');
});
