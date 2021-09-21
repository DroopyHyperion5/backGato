const PORT = process.env.PORT || 3000;
var http = require("http"); //variable

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url.lastIndexOf("juega") !== -1) {
      //res.write("Juega");
      var inicio = req.url.lastIndexOf("juega")+5;
      var fin = inicio + 8 + 9;//
      var text = req.url;
      text = text.substring(inicio, fin);
      res.write(text);
    } else {
      res.write("Esto No Es Una Jugada");
    }
    res.end();
  })
  .listen(PORT);
