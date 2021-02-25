import express from "express";
import { verifyJWToken } from "../utils";
import { IUser } from "../models/User";

export default (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (
    req.path === "/user/login" ||
    req.path === "/user/create" ||
    req.path === "/user/verify"
  ) {
    return next();
  }

  const token = req.headers.token;

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
