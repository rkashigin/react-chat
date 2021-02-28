import express from "express";
import { UserModel } from "../models";
import { IUser } from "../models/User";

export default async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.user) {
    await UserModel.findOneAndUpdate(
      {
        _id: (<IUser>req.user)._id,
      },
      {
        last_seen: new Date(),
      }
    );
  }

  next();
};
