import express from "express";

import { UploadFileModel } from "../models";
import { IUser } from "../models/User";
import { IUploadFile } from "../models/UploadFile";

class UploadFileController {
  create(req: express.Request, res: express.Response) {
    const userId = (<IUser>req.user)._id;
    const file: any = req.file;

    const fileData = {
      filename: file.filename,
      size: file.size,
      ext: file.format,
      url: file.path,
      user: userId,
    };

    const uploadFile = new UploadFileModel(fileData);

    uploadFile
      .save()
      .then((fileObj: IUploadFile) => {
        res.json({
          status: "success",
          file: fileObj,
        });
      })
      .catch((err) => {
        res.json({
          status: "error",
          message: err.message,
        });
      });
  }

  delete(req: express.Request, res: express.Response) {}
}

export default UploadFileController;
