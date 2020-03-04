const express = require('express');

const app = express();

app.get('/', function(request, response) {
  response.send('Hello Jonas');
})

app.get('/foo', function(request, response) {
  response.send('Hello Foo');
})

app.get('/foo/bar', function(request, response) {
  response.send('Hello Foo Bar');
})

app.get('/zap/:z', function(request, response) {
  response.send(`Hello ${request.params.z}`);
})

app.get('/zap', function(request, response) {
  response.send(`Hello zap ${request.query.x} and ${request.query.y}`);
})


app.listen(3000);
console.log('Server is running');
