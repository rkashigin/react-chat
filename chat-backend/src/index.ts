import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import {
  UserController,
  DialogController,
  MessageController,
} from "./controllers";

import { updateLastSeen, checkAuth } from "./middlewares";
import { loginValidation } from "./utils/validations";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(updateLastSeen);
app.use(checkAuth);

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
app.post("/user/login", loginValidation, User.login);

app.get("/dialogs", Dialog.index);
app.post("/dialogs", Dialog.create);
app.delete("/dialogs/:id", Dialog.delete);

app.get("/messages", Messages.index);
app.post("/messages", Messages.create);
app.delete("/messages/:id", Messages.delete);

app.listen(process.env.PORT, function () {
  console.log(`Server: http://localhost:${process.env.PORT}`);
});
