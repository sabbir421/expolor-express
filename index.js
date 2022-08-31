const express = require("express");
const app = express();
const { output } = require("./test");
const port = 8081;
app.get("/", (req, res) => {
  res.send(`get meathod`);
});
app.post("/", (req, res) => {
  res.send("post meathod");
});
app.put("/", (req, res) => {
  res.send("put request");
});
app.delete("/", (req, res) => {
  res.send("this is delete methode");
});
app.listen(port, () => {
  console.log(`express app listening on port ${port}`);
});
