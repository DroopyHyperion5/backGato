const PORT = process.env.PORT || 3000;
var http = require("http");//variable

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(req.url);
    res.end();

  })
  .listen(PORT);
