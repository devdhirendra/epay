import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css'; // Separate CSS file
import logo from './assets/logo.png';


function Signin() {
    const [loginData, setLoginData] = useState({
        mobileNumber: '',
        pin: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
    console.log()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/signin', loginData);
            console.log(response); 
            alert(response.data.message);
            if (response.data.message === "Login successful") {
                navigate('/dashboard'); 
            }
            
        } catch (error) {
            console.error('Signin Error:', error.response); 
            alert('Login failed');
        }
    };

    return (
        <div className="auth-container">
            <div className="logo">
                <img src={logo} alt="E-Pay" />
            </div>
            <form onSubmit={handleSubmit}>
            <span className='login'>Login</span>
                <input type="text" name="mobileNumber" placeholder="Mobile Number" onChange={handleInputChange} required />
                <input type="password" name="pin" placeholder="Enter Pin" onChange={handleInputChange} required />
                <button type="submit" className="auth-btn">Log In</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
}

export default Signin;
