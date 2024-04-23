const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello From Home Page.");
});

app.get("/about", (req, res) => {
  return res.send("Hello From About Page." + "Hey" + req.query.name);
});

app.get("/profile", (req, res) => {
  return res.send("Hello From Profile Page.");
});

app.listen(8000, () => {
  console.log("Server Started Again.");
  console.log("Server Started.");
});