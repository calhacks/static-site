const express = require("express");
const app = express();
const port = process.env.PORT || 80;
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/inclusion", (req, res) => {
  res.sendFile(__dirname + "/inclusion.html");
});

app.get("/sponsor", (req, res) => {
  res.sendFile(__dirname + "/sponsor.html");
});

app.use(express.static("./public"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/404.html");
});

app.listen(port, function () {
  console.log("Listening on " + port);
});
