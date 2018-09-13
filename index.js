const express = require('express');

let app = express();

app.get('/', function(req, res){
  //res.send('<h1>hello world</h1>');
  res.send({
    name: 'Andrew',
    likes: [
      'Biking',
      'Cricket'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage : 'Unable to handle request'
  });
});

app.listen(3000);