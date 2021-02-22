import express from "express";
import { verifyJWToken } from "../utils";
import { IUser } from "../models/User";

interface CustomRequest extends express.Request {
  user?: IUser;
}

export default (
  req: CustomRequest,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.path === "/user/login" || req.path === "/user/create") {
    return next();
  }

  const token = req.headers.token;

  console.log(token);

  verifyJWToken(token)
    .then((user: IUser) => {
      req.user = user;
      next();
    })
    .catch(() => {
      res.status(403).json({
        message: "Invalid auth token",
      });
    });
};
