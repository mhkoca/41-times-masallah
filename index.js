const express = require("express");
const app = express();

const port = 80;

var result = [
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
  "maşallah",
];

app.get("/", (req, res) => res.send(result));

app.listen(process.env.PORT || port, () =>
  console.log(`41 masallah app listening on port ${port}!`)
);
