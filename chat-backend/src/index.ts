import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import User from "./schemas/User";

const app = express();

app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://admin:123admin123@cluster0.6xzvi.mongodb.net/chat?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.post("/create", function (req: any, res: any) {
  const postData = {
    email: req.body.email,
    fullName: req.body.fullName,
    password: req.body.password,
  };

  const user = new User(postData);

  user
    .save()
    .then((obj: any) => {
      res.json(obj);
    })
    .catch((err) => res.json(err));
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
