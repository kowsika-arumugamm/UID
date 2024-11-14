// backend/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const { addTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');

// Define routes
router.post('/add', addTask);
router.get('/tasks', getTasks);
router.put('/update/:id', updateTask); // Route for updating tasks
router.delete('/delete/:id', deleteTask); // Route for deleting tasks

module.exports = router;
