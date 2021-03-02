import mongoose, { Schema, Document } from "mongoose";

export interface IUploadFile extends Document {
  filename: string;
  size: number;
  ext: string;
  url: string;
  message: string;
  user: string;
}

const UploadFileSchema = new Schema(
  {
    filename: String,
    size: Number,
    ext: String,
    url: String,
    message: { type: Schema.Types.ObjectId, ref: "Message" },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const UploadFile = mongoose.model<IUploadFile>("UploadFile", UploadFileSchema);

export default UploadFile;
