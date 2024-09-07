import React from 'react';
import Navbar from './Navbar.js';
import HomePage from './Homepage.js';
import './Style.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="content">
                <HomePage />
            </div>
        </div>
    );
}

export default Dashboard;
