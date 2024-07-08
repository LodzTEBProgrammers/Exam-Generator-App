import express from "express";

import { check } from "express-validator";
import Core from "../../core/Core.js";
import { compare } from "bcrypt";
import data from "../constants.js";
import crypto from 'crypto'
import { Controllers } from "./Controllers/controllers.js";
import { Validate, Verify, VerifyRole } from "../../utils/middlewares.js";

const userRouter = express.Router();
const { Register,Login, Logout } = Controllers;
userRouter.post(
  `/register`,
  check("email")
    .isEmail()
    .withMessage("Enter a valid email address")
    .normalizeEmail(),
  check("first_name")
    .not()
    .isEmpty()
    .withMessage("You first name is required")
    .trim()
    .escape(),
  check("last_name")
    .not()
    .isEmpty()
    .withMessage("You last name is required")
    .trim()
    .escape(),
  check("password")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Must be at least 8 chars long"),
  Validate,
  Register
);
// userRouter.get("/getToken/", (req, res) => {
//   res.json({test:crypto.randomBytes(20).toString('hex')})
// });
userRouter.post(
  "/login",
  check("email")
      .isEmail()
      .withMessage("Enter a valid email address")
      .normalizeEmail(),
  check("password").not().isEmpty(),
  Validate,
  Login
);
userRouter.get("/user", Verify, (req, res) => {
  res.status(200).json({
      status: "success",
      message: "Welcome user!",
  });
  
});
userRouter.get("/admin/user", Verify,VerifyRole, (req, res) => {
  res.status(200).json({
      status: "success",
      message: "Welcome to the your Dashboard!",
  });
  
});
userRouter.get('/logout', Logout);
export default userRouter;
