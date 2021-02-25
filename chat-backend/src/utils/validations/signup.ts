import { check } from "express-validator";

export default [
  check("email").isEmail(),
  check("fullName").isLength({ min: 3 }),
  check("password").isLength({ min: 3 }),
];
