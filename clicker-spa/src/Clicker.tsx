/*import React from 'react';
import axios from 'axios';

const Clicker: React.FC = () => {
    const incrementCount = async () => {
        try {
            // Replace with your actual API endpoint
            await axios.post('http://localhost:5103/api/clicker');
            alert('Count incremented!');
        } catch (error) {
            console.error('There was an error incrementing the count', error);
        }
    };

    return (
        <div>
            <button onClick={incrementCount}>Click me!</button>
        </div>
    );
};

export default Clicker;   
*/

import React from 'react';
import axios from 'axios';
import './Clicker.css'; // Make sure to create a corresponding Clicker.css file for styling

const Clicker: React.FC = () => {
    const handleButtonClick = async () => {
        try {
            // Replace with your actual API endpoint
            await axios.post('http://localhost:5103/api/clicker');
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
