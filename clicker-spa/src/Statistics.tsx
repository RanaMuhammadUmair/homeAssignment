/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statistics: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const fetchCount = async () => {
        try {
            // Replace with your actual API endpoint
            const response = await axios.get('http://localhost:5103/api/clicker');
            setCount(response.data);
        } catch (error) {
            console.error('There was an error fetching the count', error);
        }
    };

    useEffect(() => {
        fetchCount();
    }, []); // The empty array causes this effect to only run on mount

    return (
        <div>
            <h2>Current Count: {count}</h2>
        </div>
    );
};

export default Statistics;
*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Statistics.css'; // Make sure to create a corresponding Statistics.css file for styling

const Statistics: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await axios.get('http://localhost:5103/api/clicker');
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
