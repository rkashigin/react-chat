import express from "express";

import { UploadFileModel } from "../models";
import { IUser } from "../models/User";
import { IUploadFile } from "../models/UploadFile";
import cloudinary from "../core/cloudinary";

function uploadStream(fileBuffer: Buffer, options: any) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(options, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      })
      .end(fileBuffer);
  });
}

class UploadFileController {
  create(req: express.Request, res: express.Response) {
    const userId = (<IUser>req.user)._id;
    const file: any = req.file;

    cloudinary.v2.uploader
      .upload_stream({ resource_type: "auto" }, (error, result) => {
        if (error) {
          throw new Error(error);
        }

        const fileData = {
          filename: result.original_filename,
          size: result.bytes,
          ext: result.format,
          url: result.url,
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
      })
      .end(file.buffer);
  }

  delete(req: express.Request, res: express.Response) {}
}

export default UploadFileController;
