// Router for pie request
const express = require('express');

const router = express.Router();

router.get('/', function(request, response) {
  response.send(`
    <h1>Pies</h1>
    <ul>
      <li><a href="/cakes/vanilla">Vanilla</a></li>
      <li><a href="/cakes/chocolate">Chocolate</a></li>
    </ul>
  `);
})

router.get('/:id', function(request, response, next) {
  if (request.params.id === 'vanilla') {
    response.send('Vanilla Pies');
  } else if (request.params.id === 'chocoalate') {
    response.send('Chocolate Pies');
  } else {
    next();
  }
})

module.exports = router;
