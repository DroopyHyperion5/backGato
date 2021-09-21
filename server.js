const PORT = process.env.PORT || 3000;
var http = require("http"); //variable
var tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url.lastIndexOf("juega") !== -1) {
      var inicio = req.url.lastIndexOf("juega") + 5;
      var fin = inicio + 8 + 9; //
      var text = req.url;
      text = text.substring(inicio, fin);
      var valores = text.split(",");
      for (var i = 0; i < 9; i++) {
        if (valores[i] >= 0 && valores[i] <= 2) {
          valores[i] = parseInt(valores[i]);
        } else {
          valores[i] = 0;
        }
      }
      tablero = valores;
      res.write(JSON.stringify(tablero));
    } else {
      res.write(JSON.stringify(tablero));
    }

    res.end();
  })
  .listen(PORT);
