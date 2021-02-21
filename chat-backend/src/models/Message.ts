import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  text: {
    type: String;
    required: true;
  };
  dialog: {
    type: Schema.Types.ObjectId;
    ref: string;
    required: true;
  };
  user: {
    type: Schema.Types.ObjectId;
    ref: string;
    required: true;
  };
  unread: {
    type: boolean;
    default: false;
  };
}

//TODO: Add attachments field
const MessageSchema = new Schema(
  {
    text: { type: String, required: Boolean },
    dialog: { type: Schema.Types.ObjectId, ref: "Dialog", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    unread: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model<IMessage>("Message", MessageSchema);

export default MessageModel;
