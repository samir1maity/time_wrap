/** @format */

import Todo from "../models/todo"; // Path to your model

// Create a new task
const createTask = async (req, res) => {
  try {
    const { taskContent, subtitle, status, dueDate } = req.body;
    const newTask = new Todo({
      taskContent,
      subtitle,
      status,
      dueDate,
    });
    const savedTask = await newTask.save();
    return res.status(201).json(savedTask);
  } catch (error) {
    return res.status(500).json({ error: "Error creating task" });
  }
};

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Todo.find({ isDelete: false }); // Get tasks that are not deleted
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching tasks" });
  }
};

// Get task by ID
const getTaskById = async (req, res) => {
  try {
    const task = await Todo.findById(req.params.id);
    if (!task || task.isDelete) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching task" });
  }
};

// Update a task by ID
const updateTask = async (req, res) => {
  try {
    const { taskContent, subtitle, status, dueDate } = req.body;
    const updatedTask = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        taskContent,
        subtitle,
        status,
        dueDate,
      },
      { new: true }
    );

    if (!updatedTask || updatedTask.isDelete) {
      return res.status(404).json({ error: "Task not found or deleted" });
    }
    return res.status(200).json(updatedTask);
  } catch (error) {
    return res.status(500).json({ error: "Error updating task" });
  }
};

// Soft delete a task by ID
const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Todo.findByIdAndUpdate(
      req.params.id,
      { isDelete: true },
      { new: true }
    );
    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Error deleting task" });
  }
};
