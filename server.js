// libraries
const express = require("express");
const path = require("path");
const favicon = require("express-favicon");
const winston = require("winston");

const port = process.env.PORT || 4000;
const app = express();
app.set("port", port);

// define statc paths for files
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "dist")));
app.use(favicon(__dirname + "dist/favicon.ico"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.listen(port, err => {
  err ? winston.log(err) : console.log(`http://localhost:${port}`);
});
