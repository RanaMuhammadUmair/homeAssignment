import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Clicker from './components/Clicker';
import Statistics from './components/Statistics';
import './App.css'; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navigation /> {/* Your navigation component */}
        <Routes>
          <Route path="/clicker" element={<Clicker />} /> {/* Route for the Clicker page */}
          <Route path="/statistics" element={<Statistics />} /> {/* Route for the Statistics page */}
          {/* Add a default route if you like, e.g., redirect to /clicker */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

