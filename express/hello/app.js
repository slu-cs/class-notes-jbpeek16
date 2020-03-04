import express from 'express';

const app = express();

app.get('/', function(request, response) {
  response.send('Hello Jonas');
})

app.listen(3000);
console.log('Server is runnign');
