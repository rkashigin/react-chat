import express from "express";
import socket from "socket.io";
import { MessageModel } from "../models";
import { IUser } from "../models/User";

class MessageController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  index = (req: express.Request, res: express.Response) => {
    const dialogId: any = req.query.dialog;

    MessageModel.find({ dialog: dialogId })
      .populate(["dialog"])
      .exec()
      .then((messages) => res.json(messages))
      .catch(() =>
        res.status(404).json({
          message: "Messages not found",
        })
      );
  };

  create = (req: express.Request, res: express.Response) => {
    const userId = (<IUser>req.user)._id;

    const postData = {
      text: req.body.text,
      user: req.body.user || userId,
      dialog: req.body.dialog_id,
    };

    const message = new MessageModel(postData);

    message
      .populate("dialog", () => {})
      .save()
      .then((obj: any) => {
        res.json(obj);
        this.io.emit("SERVER:NEW_MESSAGE", obj);
      })
      .catch((err) => res.json(err));
  };

  delete = (req: express.Request, res: express.Response) => {
    const id: String = req.params.id;
    MessageModel.findOneAndRemove({ _id: id })
      .then(() =>
        res.json({
          message: `Message has been deleted`,
        })
      )
      .catch(() => {
        res.status(404).json({
          message: "Message not found",
        });
      });
  };
}

export default MessageController;
