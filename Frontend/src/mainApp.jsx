import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import LoginPage from './components/Login/LoginPage/LoginPage';
import { instituteDetails } from './data';
import AdminLogin from './pages/home/AdminLogin/adminLogin';
import AdminPage from './pages/AdminPage/AdminPage';


const MainApp = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage instituteDetails={instituteDetails}/>} />
                <Route path="/home" element={<Home />} />
                <Route path="/admin" element={<AdminLogin/>} />
                <Route path="/adminPage" element={<AdminPage/>} />
            </Routes>
        </Router>
    );
};

export default MainApp;