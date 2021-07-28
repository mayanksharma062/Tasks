const http = require('http');
const url = require('url');
const fs = require('fs');
const home = fs.readFileSync("./home.html");
const different = fs.readFileSync("./different.html");
const final = fs.readFileSync("./another.html");
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
if (req.url == "/home.html"){
res.end(home);
}
else if (req.url == "/different.html"){
    res.end(different);
}
else{
    res.end(final);
}
}).listen(8000);