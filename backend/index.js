/** @format */

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

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
