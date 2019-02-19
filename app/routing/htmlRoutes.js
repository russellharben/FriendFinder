var app = require('express');
var path = require('path');
var http = require('http');

var PORT = 3000;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

  case "/":
    return displayRoot(path, req, res);
    }
};

app.get('/', function(req, res){
    res.send("hello world.");
});

app.listen(3000);