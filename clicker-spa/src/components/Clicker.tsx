import React from 'react';
import axios from 'axios';
import './Clicker.css'; 

const Clicker: React.FC = () => {
    const handleButtonClick = async () => {
        try {
            // Replace with your actual API endpoint
            await axios.post('http://localhost:5141/api/clicker');
            // Handle the response as needed, perhaps updating a state variable to trigger a re-render
        } catch (error) {
            console.error('Error incrementing count:', error);
            // Handle error, perhaps by showing an error message to the user
        }
    };

    return (
        <div className="clicker-container">
            <button onClick={handleButtonClick} className="click-me-button">Click me!</button>
        </div>
    );
};

export default Clicker;
