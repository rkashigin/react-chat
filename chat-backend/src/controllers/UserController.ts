import express from "express";
import { UserModel } from "../models";

class UserController {
  show(req: express.Request, res: express.Response) {
    const id: String = req.params.id;
    UserModel.findOne({ _id: id })
      .then((user) => {
        res.json(user);
      })
      .catch(() => {
        res.status(404).json({
          message: "User not found",
        });
      });
  }

  getMe() {
    //TODO: return info about currentUser (self)
  }

  create(req: express.Request, res: express.Response) {
    const postData = {
      email: req.body.email,
      fullName: req.body.fullName,
      password: req.body.password,
    };

    const user = new UserModel(postData);

    user
      .save()
      .then((obj: any) => {
        res.json(obj);
      })
      .catch((err) => res.json(err));
  }

  delete(req: express.Request, res: express.Response) {
    const id: String = req.params.id;
    UserModel.findOneAndRemove({ _id: id })
      .then((user) => {
        res.json({
          message: `User ${user?.fullName} has been deleted`,
        });
      })
      .catch(() => {
        res.status(404).json({
          message: "User not found",
        });
      });
  }
}

export default UserController;
