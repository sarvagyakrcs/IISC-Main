import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom
import './adminLogin.modules.css'; // Import your CSS file
import { adminKey, baseURL, instituteDetails } from '../../../data';
import logo from '../../../components/NavBar/images/iiscLogo.png';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleAdminLogin = async () => {
        console.log('Admin Login button clicked');
        const URL = baseURL + `user/${username}/`;
    
        try {
            const response = await fetch(URL, {
                method: 'GET',
            });
    
            if (!response.ok) {
                throw new Error(`Failed to fetch user profile. Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('User profile retrieved successfully.');
            console.log({ "saving": data });
            const userDetailsJSON = JSON.stringify(data);
            localStorage.setItem('adminKey', adminKey);
            localStorage.setItem('user', userDetailsJSON);
        } catch (error) {
            console.error('Error during admin login:', error.message);
            // You can handle the error in your application, e.g., show a user-friendly message to the user.
        }
        if (localStorage.getItem('adminKey') === adminKey) {
            navigate('/home');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };
    
    const handleBackClick = () => {
        navigate('/');
        localStorage.removeItem('adminKey');
        localStorage.removeItem('accountType');
    }

    return (
        <section className={`admin login-page`}>
            <div className={`admin signin`}>
                <div className={`admin logo`}>
                    <img src={logo} alt="" />
                    <div className={`admin logo-text`}>
                        <h1 className={`admin firstWordCapital`}>
                            {instituteDetails['name-english']}
                        </h1>
                        <h2>{instituteDetails['location-english']}</h2>
                        <h1>{instituteDetails['name-hindi']}</h1>
                        <h3>{instituteDetails['location-hindi']}</h3>
                    </div>
                </div>
                <div className={`admin lineVertical`}>
                    <div className={`admin line`}></div>
                </div>
                <div className={`admin content`}>
                    <h2>Sign In</h2>
                    <div className={`admin form`}>
                        <div className={`admin inputBox`}>
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <i>Username</i>
                        </div>
                        <br></br>
                        <div className={`admin inputBox`}>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i>Password</i>
                        </div>
                        <br></br>
                        <div className={`admin inputBox`}>
                            <button onClick={handleAdminLogin}>Login</button>
                        </div>
                        <div className={`admin links`}>
                            <button onClick={handleBackClick}>Back</button>
                            <Link to="/">Login Via Microsoft</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminLogin;
