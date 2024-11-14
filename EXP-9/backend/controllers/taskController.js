// backend/controllers/taskController.js
const Task = require('../models/Task');

// Add a new task
exports.addTask = async (req, res) => {
    try {
        const { description, time } = req.body;

        // Check if the required fields are provided
        if (!description || !time) {
            return res.status(400).json({ message: "Description and time are required." });
        }

        // Create a new task with user ID, description, and time
        const newTask = new Task({
            userId: req.user.id,
            description,
            time
        });

        // Save the new task to the database
        await newTask.save();

        // Respond with the saved task
        res.status(201).json(newTask);
    } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).json({ message: "Server error while adding task" });
    }
};

// Get all tasks for the logged-in user
exports.getTasks = async (req, res) => {
    try {
        // Fetch tasks for the specific user
        const tasks = await Task.find({ userId: req.user.id });

        // Respond with the tasks
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ message: "Server error while fetching tasks" });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params; // Get task ID from request parameters
        const { description, time } = req.body; // Get updated data from the body

        // Find and update the task
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, userId: req.user.id }, // Ensure the task belongs to the user
            { description, time },
            { new: true } // Return the updated document
        );

        // If the task is not found
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ message: "Server error while updating task" });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params; // Get task ID from request parameters

        // Find and delete the task
        const deletedTask = await Task.findOneAndDelete({ _id: id, userId: req.user.id });

        // If the task is not found
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ message: "Server error while deleting task" });
    }
};
