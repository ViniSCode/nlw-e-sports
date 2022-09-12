const express = require('express');

const app = express();


app.get('/ads', (request, response) => {
  return request.json([
    {id: 1, name: 'User 1'},
    {id: 2, name: 'User 2'},
    {id: 3, name: 'User 3'},
  ])
})

app.listen(3333);