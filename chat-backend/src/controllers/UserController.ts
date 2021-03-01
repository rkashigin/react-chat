import express from "express";
import socket from "socket.io";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

import { UserModel } from "../models";
import { IUser } from "../models/User";
import { createJWToken } from "../utils";

class UserController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  show = (req: express.Request, res: express.Response) => {
    console.log(123);

    const id: string = req.params.id;
    UserModel.findById(id)
      .then((user: IUser) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(404).json({
          status: "error",
          message: err.message,
        });
      });
  };

  getMe = (req: express.Request, res: express.Response) => {
    const id: string = (<IUser>req.user)._id;
    UserModel.findById(id)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(404).json({
          status: "error",
          message: err.message,
        });
      });
  };

  create = (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      fullName: req.body.fullName,
      password: req.body.password,
    };

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const user = new UserModel(postData);

    user
      .save()
      .then((obj: IUser) => {
        res.json(obj);
      })
      .catch((err) => {
        res.status(500).json({
          status: "error",
          message: err.message,
        });
      });
  };

  findUsers = (req: express.Request, res: express.Response) => {
    const query: string = <string>req.query.query;

    UserModel.find()
      .or([
        { fullName: new RegExp(query, "i") },
        { email: new RegExp(query, "i") },
      ])
      .then((users: IUser[]) => {
        res.json(users);
      })
      .catch((err) => {
        res.status(404).json({
          status: "error",
          message: err.message,
        });
      });
  };

  delete = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    UserModel.findOneAndRemove({ _id: id })
      .then((user: IUser) => {
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

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    UserModel.findOne({ email: postData.email })
      .then((user: IUser) => {
        if (!user) {
          throw new Error("User not found");
        }

        if (bcrypt.compareSync(postData.password, user.password)) {
          const token = createJWToken(user);

          res.json({
            status: "success",
            token,
          });
        } else {
          throw new Error("Wrong email or password");
        }
      })
      .catch((err) => {
        res.status(403).json({
          status: "error",
          message: err.message,
        });
      });
  };

  verify = (req: express.Request, res: express.Response) => {
    const hash = req.query.hash;

    if (!hash) {
      return res.status(422).json({ errors: "Invalid hash" });
    }

    UserModel.findOne({ confirm_hash: <string>hash })
      .exec()
      .then((user) => {
        if (!user) {
          throw new Error("Hash not found");
        }

        user.confirmed = true;

        user
          .save()
          .then(() => {
            res.json({
              status: "success",
              message: "Account has been successfully verified!",
            });
          })
          .catch(() => {
            throw new Error("User not found");
          });
      })
      .catch((err) => {
        res.status(403).json({
          status: "error",
          message: err.message,
        });
      });
  };
}

export default UserController;
