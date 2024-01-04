import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Statistics.css';

const Statistics: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const response = await axios.get('http://localhost:5284/api/clicker');
                setCount(response.data);
            } catch (error) {
                console.error('Error fetching count:', error);
                // Handle error, perhaps by showing an error message to the user
            }
        };

        fetchCount();
    }, []);

    return (
        <div className="statistics-container">
            <h2>Click counter: {count}</h2>
        </div>
    );
};

export default Statistics;
