import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";
import { generatePasswordHash } from "../utils";

export interface IUser extends Document {
  email?: string;
  fullName?: string;
  password?: string;
  confirmed?: boolean;
  avatar?: string;
  confirm_hash?: string;
  last_seen?: Date;
}

//TODO: Add last seen by default
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: "Email address is required",
      validate: [validator.isEmail, "Invalid email address"],
      unique: true,
    },
    fullName: {
      type: String,
      required: "Fullname is required",
    },
    password: {
      type: String,
      required: "Password is required",
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    avatar: String,
    confirm_hash: String,
    last_seen: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  const user: IUser = this;

  if (!user.isModified("password")) return next();

  generatePasswordHash(user.password)
    .then((hash) => {
      user.password = String(hash);
      next();
    })
    .catch((err) => {
      next(err);
    });
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;