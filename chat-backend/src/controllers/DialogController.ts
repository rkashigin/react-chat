import express from "express";
import socket from "socket.io";
import { DialogModel, MessageModel } from "../models";
import { IUser } from "../models/User";

class DialogController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  index = (req: express.Request, res: express.Response) => {
    const authorId: any = (<IUser>req.user)._id;

    DialogModel.find({ author: authorId })
      .populate(["author", "partner"])
      .exec()
      .then((dialogs) => res.json(dialogs))
      .catch(() =>
        res.status(404).json({
          message: "Dialogs not found",
        })
      );
  };

  create = (req: express.Request, res: express.Response) => {
    const postData = {
      author: req.body.author,
      partner: req.body.partner,
    };

    const dialog = new DialogModel(postData);

    dialog
      .save()
      .then((dialogObj: any) => {
        const message = new MessageModel({
          text: req.body.text,
          user: dialogObj.author,
          dialog: dialogObj._id,
        });

        message
          .save()
          .then(() => res.json(dialogObj))
          .catch((err) => res.json(err));
      })
      .catch((err) => res.json(err));
  };

  delete = (req: express.Request, res: express.Response) => {
    const id: String = req.params.id;
    DialogModel.findOneAndRemove({ _id: id })
      .then(() =>
        res.json({
          message: `Dialog has been deleted`,
        })
      )
      .catch(() => {
        res.status(404).json({
          message: "Dialog not found",
        });
      });
  };
}

export default DialogController;
