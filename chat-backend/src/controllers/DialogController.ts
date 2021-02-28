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
    const userId: any = (<IUser>req.user)._id;

    DialogModel.find()
      .or([{ author: userId }, { partner: userId }])
      .populate(["author", "partner"])
      .populate({
        path: "lastMessage",
        populate: {
          path: "user",
        },
      })
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
      author: (<IUser>req.user)._id,
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
          .then(() => {
            dialogObj.lastMessage = message._id;

            dialogObj
              .save()
              .then(() => {
                res.json(dialogObj);
                this.io.emit("SERVER:DIALOG_CREATED", {
                  ...postData,
                  dialog: dialogObj,
                });
              })
              .catch((err) => res.json(err));
          })
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
