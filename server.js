const PORT = process.env.PORT || 3000;
var http = require("http"); //variable

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url.lastIndexOf("juega")) {
      res.write("Let´s Go");
    }
    else{
        res.write("Game Over");
    }
    res.end();
  })
  .listen(PORT);
