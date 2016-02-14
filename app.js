var express = require('express');
var cowsay  = require('cowsay');
var yosay  = require('yosay');

var app = express();

var books = ['Javascript-The Good Parts', 'Eloquent Javascript',
'Horton Hears a Who'];

app.get('/cowsay/:cowsays', function(request, response) {
  response.setHeader('content-type', 'text/html');
  response.send(
    '<pre>' +
      cowsay.say({'text': request.params.cowsays}) +
    '</pre>'
  );
});

app.get('/yosay/:yosays', function(request, response) {
  response.setHeader('content-type', 'text/html');
  response.send(
    '<pre>' +
      yosay({'text': request.params.yosays}) +
    '</pre>'
  );
});

app.get('/', function(request, response) {
  response.json(books);
});

app.listen(8080);
