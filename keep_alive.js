// app.js
const http = require('http');
http.createServer(function (req, res) {
  res.write("hi APK bhai");
  res.end();
}).listen(8080);
