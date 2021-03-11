import express from "express";
import socket from "socket.io";
import bodyParser from "body-parser";
import { loginValidation, signupValidation } from "../utils/validations";
import { checkAuth, updateLastSeen } from "../middlewares";

import {
  UserCtrl,
  MessageCtrl,
  DialogCtrl,
  UploadFileCtrl,
} from "../controllers";

import multer from "./multer";

export default (app: express.Express, io: socket.Server) => {
  const UserController = new UserCtrl(io);
  const MessageController = new MessageCtrl(io);
  const DialogController = new DialogCtrl(io);
  const UploadFileController = new UploadFileCtrl();

  app.use(bodyParser.json());
  app.use(checkAuth);
  app.use(updateLastSeen);

  app.get("/user/me", UserController.getMe);
  app.get("/user/verify", UserController.verify);
  app.post("/user/create", signupValidation, UserController.create);
  app.post("/user/login", loginValidation, UserController.login);
  app.get("/user/find", UserController.findUsers);
  app.get("/user/:id", UserController.show);
  app.delete("/user/:id", UserController.delete);

  app.get("/dialogs", DialogController.index);
  app.post("/dialogs", DialogController.create);
  app.delete("/dialogs/:id", DialogController.delete);

  app.get("/messages", MessageController.index);
  app.post("/messages", MessageController.create);
  app.delete("/messages", MessageController.delete);

  app.post("/files", multer.single("file"), UploadFileController.create);
  app.delete("/files", UploadFileController.delete);
};
