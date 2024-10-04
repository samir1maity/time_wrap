/** @format */

import express from "express";
import { userController } from "../../controllers/index.js";

const router = express.Router();

router.post("/signup", (req, res) => {
  console.log("control raeched here");
  userController.signUp(req, res);
});

export default router;
