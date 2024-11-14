// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskData, setTaskData] = useState({ description: '', time: '' });

    const fetchTasks = async () => {
        try {
            const response = await api.get('/tasks/tasks', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setTasks(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addTask = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/tasks/add', taskData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setTasks([...tasks, response.data]);
            setTaskData({ description: '', time: '' });
        } catch (error) {
            console.error(error);
        }
    };

    const markComplete = async (taskId) => {
        // Logic to mark task as complete
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            tasks.forEach(task => {
                if (new Date(task.time) < new Date() && !task.completed) {
                    alert(`Task "${task.description}" is overdue!`);
                }
            });
        }, 60000);

        return () => clearInterval(interval);
    }, [tasks]);

    return (
        <div>
            <h2>To-Do List</h2>
            <form onSubmit={addTask}>
                <input type="text" name="description" placeholder="Task description" value={taskData.description} onChange={(e) => setTaskData({ ...taskData, description: e.target.value })} required />
                <input type="datetime-local" name="time" value={taskData.time} onChange={(e) => setTaskData({ ...taskData, time: e.target.value })} required />
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        <span>{task.description}</span>
                        <span>{new Date(task.time).toLocaleString()}</span>
                        <button onClick={() => markComplete(task._id)}>{task.completed ? 'Completed' : 'Mark Complete'}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
