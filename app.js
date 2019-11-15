const http = require("http");
const fs = require("fs");

http
  .createServer(function(_req, res) {
    fs.readFile("templates/index.html", "utf8", function(_error, data) {
      data = data.replace("{ start }", "start");

      res.end(data);
    });
  })
  .listen(6009, "localhost", function() {
    console.log("Server listening on :6009 port.");
  });
