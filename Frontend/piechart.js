import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const PieChart = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/api/expenses', {
                headers: { Authorization: token }
            });
            const categoryData = {};
            response.data.forEach(expense => {
                categoryData[expense.category] = (categoryData[expense.category] || 0) + expense.amount;
            });

            setData({
                labels: Object.keys(categoryData),
                datasets: [{
                    data: Object.values(categoryData),
                    backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange'],
                }]
            });
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Category-wise Expense Distribution</h2>
            <Pie data={data} />
        </div>
    );
};

export default PieChart;
