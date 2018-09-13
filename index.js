const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

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
  res.send('<a>About page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage : 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});