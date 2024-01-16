import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import LoginPage from './components/Login/LoginPage/LoginPage';
import { instituteDetails } from './data';
import AdminLogin from './pages/home/AdminLogin/adminLogin';
import AdminPage from './pages/AdminPage/AdminPage';
import Student from './menuItems/Students/Students';
import Staff from './menuItems/Staff/Staff';
import Resources from './menuItems/Resources/Resources';
import Validate from './menuItems/Validate/Validate';
import ExtUserAcAdmin from './menuItems/ExtUserAcAdmin/ExtUserAcAdmin';
import AdminMenuPage from './menuItems/Admin/admin';
import SignUpPageMain from './pages/SignUp/mainSignUpPage';


const MainApp = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage instituteDetails={instituteDetails}/>} />
                <Route path="/home" element={<Home />} />
                // menu options atart
                <Route path="/home/student" element={<Student />} />
                <Route path="/home/staff" element={<Staff />} />
                <Route path="/home/resources" element={<Resources />} />
                <Route path="/home/validate" element={<Validate />} />
                <Route path="/home/admin" element={<AdminMenuPage  />} /> 
                <Route path="/home/extuseracadmin" element={<ExtUserAcAdmin />} />
                // menu options end
                <Route path="/adminLogin" element={<AdminLogin/>} />
                <Route path="/adminPage" element={<AdminPage/>} />
                //signUp
                <Route path="/signUp" element={<SignUpPageMain/>} />
            </Routes>
        </Router>
    );
};

export default MainApp;