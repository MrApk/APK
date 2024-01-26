var http = require('http');
http.createServer(function(req, res) {
  res.write("Hi APK");
  res.end();
}).listen(8080);
