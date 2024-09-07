import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const Homepage = () => {
    return (
        <div className="homepage-container">
            <div className="watermark">e-pay</div>
            <div className="service-buttons">
                <Link to="/payment" className="service-button">Payments</Link>
                <button className="service-button">Education</button>
                <button className="service-button">Health</button>
                <button className="service-button">Gov. Services</button>
            </div>
        </div>
    );
};

export default Homepage;
