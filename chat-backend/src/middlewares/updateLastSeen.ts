import express from "express";
import { UserModel } from "../models";

export default async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  await UserModel.findOneAndUpdate(
    {
      _id: "60326f49884c942ba628fe3f",
    },
    {
      last_seen: new Date(),
    }
  );
  next();
};
