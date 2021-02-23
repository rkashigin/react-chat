import express from "express";
import socket from "socket.io";
import bcrypt from "bcrypt";

import { UserModel } from "../models";
import { IUser } from "../models/User";
import { createJWToken } from "../utils";

class UserController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  show = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    UserModel.findById(id)
      .then((user) => {
        res.json(user);
      })
      .catch(() => {
        res.status(404).json({
          message: "User not found",
        });
      });
  };

  getMe = (req: express.Request, res: express.Response) => {
    const id: string = (<IUser>req.user)._id;
    UserModel.findById(id)
      .then((user) => {
        res.json(user);
      })
      .catch(() => {
        res.status(404).json({
          message: "User not found",
        });
      });
  };

  create = (req: express.Request, res: express.Response) => {
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
  };

  delete = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
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
  };

  login = (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      password: req.body.password,
    };

    console.log(postData);

    UserModel.findOne({ email: postData.email })
      .then((user: any) => {
        if (bcrypt.compareSync(postData.password, user.password)) {
          const token = createJWToken(user);

          res.json({
            status: "success",
            token,
          });
        }
      })
      .catch((err) => {
        res.json({
          status: "Error",
          message: "Incorrect email or password",
        });
      });
  };
}

export default UserController;
