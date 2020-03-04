const express = require('express');

const app = express();

app.get('/favicon.ico', function(request, response) {
  response.status(204).end();
})

app.use(function(request, response, next) {
  console.log('--------------------', new Date().toLocaleDateString())
  console.log(request.method, request.url);
  console.log('Body= ', request.body);
  next();
})

app.get('/', function(request, response) {
  response.send(`
    <h1>Bakery</h1>
    <ul>
      <li><a="/cakes">Cakes</a></li>
      <li><a="/pies">Pies</a></li>
    </ul>
  `);
})

app.use('/cakes', require('./cakes.js'));
app.use('/pies', require('./pies.js'));

app.use(function(request, response, next) {
  console.log('Replied with 404');
  response.status(404).end();
})

app.use(function(request, response, next) {
  console.log(error.stack);
  response.status(500).send(error.message);
})

app.listen(3001);
console.log('Server is running');
