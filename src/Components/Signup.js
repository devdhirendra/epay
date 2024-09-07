import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';
import logo from './assets/logo.png';

function Signup() {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        pin: '',
        confirmPin: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userData.pin !== userData.confirmPin) {
            alert("Pins don't match!");
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/signup', userData);
            console.log(response);
            alert(response.data.message);
            if (response.data.message === "User registered successfully") {
                navigate('/signin'); 
            }
        } catch (error) {
            console.error('Signup Error:', error.response);
            alert('Failed to register');
        }
    };

    return (
        <div className="auth-container">
            <div className="logo">
                <img src={logo} alt="E-Pay" />
            </div>
            <form onSubmit={handleSubmit}>
                <span className='register'>Register</span>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} required />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} required />
                <input type="text" name="mobileNumber" placeholder="Mobile Number" onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
                <input type="password" name="pin" placeholder="Enter Pin" onChange={handleInputChange} required />
                <input type="password" name="confirmPin" placeholder="Confirm Pin" onChange={handleInputChange} required />
                <button type="submit" className="auth-btn">Register</button>
            </form>
            <p>Already have an account? <Link to="/signin">Login</Link></p>
        </div>
    );
}

export default Signup;
