import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom
import './adminLogin.modules.css'; // Import your CSS file
import { adminKey, baseURL, instituteDetails } from '../../../data';
import logo from '../../../components/NavBar/images/iiscLogo.png';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [adminDetails, setAdminDetails] = useState({});

    const handleLogin = () => {
        // Add your login logic here
        console.log('Login button clicked');
    };

    const handleAdminLogin = async () => {
        console.log('Admin Login button clicked');
        const URL = baseURL + `users/${username}/`

        const response = await fetch(`${URL}`, {
            method: 'GET',
        });

        if (response.ok) {
            const data = await response.json();
            console.log('User profile retrieved successfully.');
            console.log({ "saving": data });
            const userDetailsJSON = JSON.stringify(data);
            setAdminDetails(data);
            localStorage.setItem('adminKey', adminKey);
        } else {
            console.error('Unexpected response from server:', response);
        }
        if(adminDetails == {}){
            alert("Invalid Username or Password");
        }
        else{
            navigate('/adminPage');
        }
    }

    return (
        <section className="login-page">
            <div className="signin">
                <div className="logo">
                    <img src={logo} alt="" />
                    <div className="logo-text">
                        <h1 className='firstWordCapital'>
                            {instituteDetails['name-english']}
                        </h1>
                        <h2>{instituteDetails['location-english']}</h2>
                        <h3>{instituteDetails['name-hindi']}</h3>
                        <h3>{instituteDetails['location-hindi']}</h3>
                    </div>
                </div>
                <div className="lineVertical">
                    <div className="line"></div>
                </div>
                <div className="content">
                    <h2>Sign In</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form">
                            <div className="inputBox">
                                <input
                                    type="text"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <i>Username</i>
                            </div>
                            <br />
                            <div className="inputBox">
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <i>Password</i>
                            </div>
                            <br />
                            <div className="inputBox">
                                <button type="submit" onClick={handleAdminLogin} >Login</button>
                                <button type="button" onClick={() => navigate("/")}>Back</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AdminLogin;
