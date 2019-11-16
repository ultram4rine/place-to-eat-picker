const express = require("express");
const fs = require("fs");

const app = express.Router();

app.get("/", (_req, res) => {
  fs.readFile("templates/index.html", "utf8", function(_error, data) {
    res.end(data);
  });
});

module.exports = app;
