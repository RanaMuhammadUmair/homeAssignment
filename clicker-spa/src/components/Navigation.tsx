import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMousePointer, faChartBar } from '@fortawesome/free-solid-svg-icons';


const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
        return isActive ? 'link active' : 'link';
    };

    return (
        <div>
            {/* Hamburger icon to toggle the menu */}
            <button className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                &#9776;
            </button>

            {/* Navigation menu that slides in from the left */}
            <div className={`navigation ${isMenuOpen ? 'active' : ''}`}>
                <nav className="menu-items">
                    <NavLink to="/clicker" className={getNavLinkClass}>
                        <FontAwesomeIcon icon={faMousePointer} /> Clicker
                    </NavLink>
                    <NavLink to="/statistics" className={getNavLinkClass}>
                        <FontAwesomeIcon icon={faChartBar} /> Statistics
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;

