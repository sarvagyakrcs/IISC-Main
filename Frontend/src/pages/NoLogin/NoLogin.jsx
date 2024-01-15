// NoLogin.js
import React from 'react';
import './NoLogin.css';
import logo from './images/iiscLogo.png';
import { instituteDetails } from '../../data';
import { useNavigate } from 'react-router-dom';

const NoLogin = () => {
    const navigate = useNavigate();
    return (
        <div className="noLogin-no-login-page">
            <div className="noLogin-container">
                <div className="noLoginFlex">
                    <img src={logo} alt="" />
                    <div className="vertical-line"></div>
                    <div className="institute-details">
                        <h2>{instituteDetails['abbr']}</h2>
                        <h3>{instituteDetails['name-hindi']}</h3>
                        <h3>{instituteDetails['location-hindi']}</h3>
                    </div>
                </div>
            </div>
            <div className="noLogin-container">
                <h2 className="noLogin-header">You Need to Log In</h2>
                <p className="noLogin-message">Please log in to access the private endpoint.</p>
                <button className="noLogin-login-button" onClick={() => {navigate('/')}}>
                    Log In
                </button>
            </div>
        </div>
    );
}

export default NoLogin;
