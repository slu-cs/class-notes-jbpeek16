// Router for cake request
const express = require('express');

const router = express.Router();

router.get('/', function(request, response) {
  response.send(`
    <h1>Cakes</h1>
    <ul>
      <li><a="/cakes/vanilla">Vanilla</a></li>
      <li><a="/cakes/chocolate">Chocolate</a></li>
    </ul>
  `);
})

router.get('/:id', function(request, response, next) {
  if (request.params.id === 'vanilla') {
    response.send('Vanilla Cakes');
  } else if (request.params.id === 'chocoalate') {
    response.send('Chocolate Cakes');
  } else {
    next();
  }
})

module.exports = router;
