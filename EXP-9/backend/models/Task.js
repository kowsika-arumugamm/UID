const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: true },
    time: { type: Date, required: true },
    completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);
