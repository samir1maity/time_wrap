/** @format */

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

import users from "./src/config/db.js";

const JWT_SECRET = process.env.JWT_SECRET;

mongoose.connect(process.env.DATABASE_URL);

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.post("/signup", async (req, res) => {
  const name = "samir";
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;

  console.log("req.body.email", req.body.email);

  const temp = await users.create({
    name: name,
    email: email,
    password: password,
    username: username,
  });

  console.log("temp", temp);

  res.json({
    msg: "register success",
  });
});

app.post("/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // do db validations, fetch id of user from db
  const token = jwt.sign(
    {
      id: 1,
    },
    JWT_SECRET
  );
  console.log("res.cookie", res.cookie);
  res.cookie("token", token);
  res.send("Logged in!");
});

app.get("/cookies", (req, res) => {
  console.log("Cookies from request:", req.cookies); // Log cookies received from the client
  res.send(req.cookies); // Send cookies back to the client
});

app.listen(process.env.PORT, () => {
  console.log("backend is running on PORT::", process.env.PORT);
});
