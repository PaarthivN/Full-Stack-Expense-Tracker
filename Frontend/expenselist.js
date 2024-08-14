import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/api/expenses', {
                headers: { Authorization: token }
            });
            setExpenses(response.data);
        };
        fetchExpenses();
    }, []);

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:5000/api/expenses/${id}`, {
            headers: { Authorization: token }
        });
        setExpenses(expenses.filter(expense => expense._id !== id));
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Comments</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map(expense => (
                    <tr key={expense._id}>
                        <td>{expense.category}</td>
                        <td>{expense.amount}</td>
                        <td>{new Date(expense.createdAt).toLocaleDateString()}</td>
                        <td>{new Date(expense.updatedAt).toLocaleDateString()}</td>
                        <td>{expense.comments}</td>
                        <td>
                            <button onClick={() => handleDelete(expense._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
