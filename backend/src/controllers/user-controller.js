/** @format */

import { userServices } from "../services/index.js";

export const signUp = async (req, res) => {
  console.log("req.body", req.body);
  const temp = await userServices.signUp(req.body);
};
