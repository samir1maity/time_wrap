/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userModel = new Schema({
  name: String,
  email: { type: String },
  password: String,
  username: { type: String },
});

export default mongoose.model("user", userModel);
