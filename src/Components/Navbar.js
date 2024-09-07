import React from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import user from './assets/user.png';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        alert("Thank for using - ePay.")
        navigate('/signin');
    };
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="Company Logo" />
                    <span className="navbar-title">ePay</span>
                </div>
                <div>
                    <span className='middle-navbar'>Welcome to ePay</span>
                </div>
                <div className="navbar-account">
                    <img src={user} alt="Account" />
                {/* </div>
                <div> */}
                <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            {/* <div className="payment-section">
                <h2>Phone Payment</h2>
                <form>
                    <label htmlFor="phone-number">Enter your mobile number:</label>
                    <input type="text" id="phone-number" name="phone-number" placeholder="Mobile Number" />
                    <button type="submit">Submit</button>
                </form>
            </div> */}
        </div>
    );
}

export default Navbar;


/**
 * @file Navbar.js
 * @description This file is part of the e-Pay project.
 * @author Dhirendra Kumar Ojha.
 * @date 2024
 */

