import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import { UserController, DialogController } from "./controllers";

const app = express();

app.use(bodyParser.json());

const User = new UserController();
const Dialog = new DialogController();

mongoose.connect(
  "mongodb+srv://admin:123admin123@cluster0.6xzvi.mongodb.net/chat?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.get("/user/:id", User.show);
app.delete("/user/:id", User.delete);
app.post("/user/create", User.create);

app.get("/dialogs/:id", Dialog.index);
app.post("/dialogs", Dialog.create);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
