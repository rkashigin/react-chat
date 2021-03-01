import express from "express";
import socket from "socket.io";
import { MessageModel, DialogModel } from "../models";
import { IUser } from "../models/User";
import { IMessage } from "../models/Message";
import { IDialog } from "../models/Dialog";

class MessageController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  index = (req: express.Request, res: express.Response) => {
    const dialogId: any = req.query.dialog;
    const userId = (<IUser>req.user)._id;

    MessageModel.updateMany(
      { dialog: dialogId, user: { $ne: userId } },
      { $set: <any>{ read: true } },
      { multi: true },
      (err: any) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            status: "error",
            message: err,
          });
        }
      }
    );

    MessageModel.find({ dialog: dialogId })
      .populate(["dialog", "user"])
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
      .populate("user", () => {})
      .save()
      .then((message: IMessage) => {
        DialogModel.findOneAndUpdate(
          { _id: postData.dialog },
          { lastMessage: message._id },
          { upsert: true }
        )
          .then(() => {
            res.json(message);
            this.io.emit("SERVER:NEW_MESSAGE", message);
          })
          .catch((err) =>
            res.status(500).json({
              status: "error",
              message: err.message,
            })
          );
      })
      .catch((err) =>
        res.status(500).json({
          status: "error",
          message: err.message,
        })
      );
  };

  delete = (req: express.Request, res: express.Response) => {
    const id: string = <string>req.query.id;
    const userId: any = (<IUser>req.user)._id;

    MessageModel.findById(id)
      .then((message: IMessage) => {
        if (!message) {
          throw new Error("Message not found");
        }

        if (message.user.toString() === userId) {
          const dialogId = message.dialog;

          message.remove().then(() => {
            MessageModel.findOne(
              { dialog: dialogId },
              {},
              { sort: { createdAt: -1 } }
            )
              .then((preLastMessage: any) => {
                DialogModel.findById(dialogId).then((dialog: IDialog) => {
                  dialog.lastMessage = preLastMessage;
                  dialog.save().then(() =>
                    res.json({
                      status: "success",
                      message: `Message has been deleted`,
                    })
                  );
                });
              })
              .catch((err) =>
                res.status(500).json({
                  status: "error",
                  message: err.message,
                })
              );
          });
        } else {
          res.status(403).json({
            status: "error",
            message: `No permission for deletion`,
          });
        }
      })
      .catch((err) => {
        res.status(404).json({
          status: "error",
          message: err.message,
        });
      });
  };
}

export default MessageController;
