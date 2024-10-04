/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new mongoose.Schema(
  {
    taskContent: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "working"],
      default: "pending",
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: Date,
      default: null,
    },
    userId: {
      type: String,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("todos", TodoSchema);

export default Todo;
