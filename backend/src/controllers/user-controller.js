import { userServices } from "../services/index.js";

export const signUp = async (req, res) => {
  const temp = await userServices.signUp(req.body)
}