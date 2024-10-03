/** @format */

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import ApiRoute from './src/routes/index.js'

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
app.use('/api', ApiRoute)

// app.post("/signup", async (req, res) => {
//   const { email, password, username, firstName, lastName } = req.body
//   if (email === "" || password === "" || username === "") {
//     return res.json({
//       msg: "something went wrong !"
//     })
//   } else {
//     await users.create({
//       email: email,
//       password: password,
//       username: username,
//     });
//     return res.json({
//       msg: "register success",
//     });
//   }
// });

// app.post("/signin", async (req, res) => {
//   const { username, password } = req.body
//   if (username === "" || password === "") {
//     return res.json({
//       msg: "invaild credentials"
//     })
//   } else {
//    const user = await users.findOne({ username, password })
//    console.log('user', user)
//     if (!user) {
//       res.json({ msg: "user is not valid" })
//     } else {
//      const token = jwt.sign(
//         { username: username },
//         JWT_SECRET
//       );
//       res.cookie("token", token);
//       res.send("Logged in!");
//     }
//   }
// });


// app.get("/cookies", (req, res) => {
//   console.log("Cookies from request:", req.cookies); // Log cookies received from the client
//   res.send(req.cookies); // Send cookies back to the client
// });


app.listen(3005, () => {
  console.log("backend is running on PORT::", process.env.PORT);
});
