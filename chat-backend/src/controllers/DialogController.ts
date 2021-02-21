import express from "express";
import { DialogModel } from "../models";

class DialogController {
  index(req: express.Request, res: express.Response) {
    const authorId: any = req.params.id;

    DialogModel.find({ author: authorId })
      .populate(["author", "partner"])
      .exec()
      .then((dialogs) => res.json(dialogs))
      .catch(() =>
        res.status(404).json({
          message: "Dialogs not found",
        })
      );
  }

  create(req: express.Request, res: express.Response) {
    const postData = {
      author: req.body.author,
      partner: req.body.partner,
    };

    const dialog = new DialogModel(postData);

    dialog
      .save()
      .then((obj: any) => res.json(obj))
      .catch((err) => res.json(err));
  }

  delete(req: express.Request, res: express.Response) {
    const id: String = req.params.id;
    DialogModel.findOneAndRemove({ _id: id })
      .then((user) => {
        res.json({
          message: `Dialog has been deleted`,
        });
      })
      .catch(() => {
        res.status(404).json({
          message: "Dialog not found",
        });
      });
  }
}

export default DialogController;
