var http = require('http');
var fs = require('fs');
var home = fs.readFileSync("./sum.html");

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end(home);
}).listen(8080);