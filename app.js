const express = require("express");
const path = require("path");

const config = require("./config/Config");
const routes = require("./routes/Routes");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

app.listen(config.APP_PORT);

module.exports = app;
