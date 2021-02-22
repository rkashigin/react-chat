import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import {
  UserController,
  DialogController,
  MessageController,
} from "./controllers";

import { updateLastSeen } from "./middlewares";

const app = express();

app.use(bodyParser.json());
app.use(updateLastSeen);

const User = new UserController();
const Dialog = new DialogController();
const Messages = new MessageController();

mongoose.connect(
  "mongodb+srv://admin:123admin123@cluster0.6xzvi.mongodb.net/chat",
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

app.get("/dialogs", Dialog.index);
app.post("/dialogs", Dialog.create);
app.delete("/dialogs/:id", Dialog.delete);

app.get("/messages", Messages.index);
app.post("/messages", Messages.create);
app.delete("/messages/:id", Messages.delete);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
