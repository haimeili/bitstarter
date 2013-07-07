var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var out = fs.readFileSync('index.html').toString();

app.get('/', function(request, response) {
  response.end(out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
