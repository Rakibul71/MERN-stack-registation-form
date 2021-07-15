const express = require("express");
const app = express();
const path = require("path");
require("./db/conn");

const port = process.env.PORT || 3000;

console.log(path);
// app.use(express.static())

app.get("/", (req, res) => {
  res.send("welcome to our website");
});
app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
