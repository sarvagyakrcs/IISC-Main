import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useIsAuthenticated } from '@azure/msal-react';
import './LoginPage.modules.css';
import logo from '../../NavBar/images/iiscLogo.png'
import { SignInButton } from '../SignInButton';
import { SignOutButton } from '../SignOutButton';

const LoginPage = (props) => {
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();
    const [accountType, setAccountType] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleAccountClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleAccountTypeSelect = (accountType) => {
        setAccountType(accountType);
        localStorage.setItem('accountType', accountType);
        setIsDropdownOpen(false);
    };

    const handleAdminLogin = () => {
        handleAccountTypeSelect('Admin')
        navigate('/admin');
    }

    const signInButton = (
        <div className="signInButtonContainer">
            <div className="content">
                {isAuthenticated ? <SignOutButton /> : <SignInButton userAccountType={accountType} />}
                <button type="button" onClick={() => setAccountType('')}>
                    Change Account Type
                </button>
                <button type="button" onClick={() => window.alert(`Selected account type: ${accountType}`)}>
                    View Account Type
                </button>
            </div>
        </div>
    )

    const userTypeDropDown = (
        <div className="dropdown-container">
            <button type="button" onClick={handleAccountClick}>
                Select Account Type
            </button>
            {isDropdownOpen && (
                <div className="dropdown-menu">
                    {/* Dropdown options */}
                    <div onClick={() => handleAccountTypeSelect('Student')} className='dropdownOption'>Student</div>
                    <div onClick={() => handleAccountTypeSelect('Faculty')} className='dropdownOption'>Faculty</div>
                    <div onClick={() => handleAccountTypeSelect('External User')} className='dropdownOption'>External User</div>
                    {/* Add more options as needed */}
                </div>
            )}
        </div>

    )

    return (
        <>
            <section className="product-description">
                <div className="product-info">
                    <div className="product-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="line-vertical">
                        <div className="line"></div>
                    </div>
                    <div className="logo-details">
                        <div className="logo-text">
                            <h1 className='first-word-capital'>
                                {props.instituteDetails['name-english']}
                            </h1>
                            <h2>{props.instituteDetails['location-english']}</h2>
                            <h2>{props.instituteDetails['name-hindi']}</h2>
                            <h2>{props.instituteDetails['location-hindi']}</h2>
                        </div>
                    </div>
                    <div className="line-vertical">
                        <div className="line"></div>
                    </div>
                    <div className="signInbuttons">
                        {accountType === '' ? userTypeDropDown : signInButton}
                        {accountType === '' ? <button onClick={handleAdminLogin}>Admin Login</button> : ""}
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginPage;
