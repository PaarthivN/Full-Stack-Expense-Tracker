import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = () => {
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        await axios.post('http://localhost:5000/api/expenses', { category, amount, comments }, {
            headers: { Authorization: token }
        });
        alert('Expense Added');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
            <input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
            <input type="text" placeholder="Comments" onChange={(e) => setComments(e.target.value)} />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
