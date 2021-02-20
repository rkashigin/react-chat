const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect("mongodb://localhost:27017/chat", { useNewUrlParser: true });

app.get("/", function (_: any, res: any) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
