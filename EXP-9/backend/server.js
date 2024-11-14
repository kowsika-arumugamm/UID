// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes'); // Import your routes

const app = express();
app.use(express.json());

// Route middleware
app.use('/tasks', taskRoutes);

// Server and database connection logic
mongoose.connect('your_mongoDB_URI', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(5000, () => console.log('Server is running on port 5000')))
    .catch((err) => console.log(err));
