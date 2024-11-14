// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            await api.post('/auth/signup', formData);
            alert('Signup successful! Redirecting to login.');
            navigate('/login');
        } catch (error) {
            console.error(error);
            alert('Signup failed');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
