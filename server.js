'use strict';

const express = require ('express');

const app = express();
app.use('/src', express.static('src'));
app.use('/public', express.static('public'));
app.use(express.json());


app.get('/', function(req, res) {
  res.sendFile(__dirname +  '/public/index.html');
});

app.get('/password', function(req, res) {
  res.sendFile(__dirname +  '/public/password.html');
});

app.post('/login', function(req, res) {
  req.body.username === 'name' && req.body.password === 'password' ? res.json({status: 'OK'}) : res.json({status: 'Error'});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
