import mongoose, { Schema } from "mongoose";
import validator from "validator";

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
    last_seen: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
