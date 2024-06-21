require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Namaste duniya!");
});

app.get("/twitter", (req, res) => {
  res.send("anniemaniedotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login!</h1>");
});

app.get("/youtube", (req, res) => {
    res.send("<h2>App work is on , let's go!</h2>");
  });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
