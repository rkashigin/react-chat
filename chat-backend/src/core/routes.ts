import express from "express";
import io from "socket.io";
import bodyParser from "body-parser";
import { loginValidation } from "../utils/validations";
import { checkAuth, updateLastSeen } from "../middlewares";
import {
  DialogController,
  MessageController,
  UserController,
} from "../controllers";

// TODO: pass to controllers info abouts sockets, so they could interact with them

export default (app: express.Express, io?: io.Socket) => {
  app.use(bodyParser.json());
  app.use(updateLastSeen);
  app.use(checkAuth);

  app.get("/user/me", UserController.getMe);
  app.get("/user/:id", UserController.show);
  app.delete("/user/:id", UserController.delete);
  app.post("/user/create", UserController.create);
  app.post("/user/login", loginValidation, UserController.login);

  app.get("/dialogs", DialogController.index);
  app.post("/dialogs", DialogController.create);
  app.delete("/dialogs/:id", DialogController.delete);

  app.get("/messages", MessageController.index);
  app.post("/messages", MessageController.create);
  app.delete("/messages/:id", MessageController.delete);
};
