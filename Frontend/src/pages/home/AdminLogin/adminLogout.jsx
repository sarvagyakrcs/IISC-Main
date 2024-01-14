import React from 'react'
import { Link, useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom

const AdminLogout = () => {
    const navigate = useNavigate();

    const handleAdminLogOut = () => {
        localStorage.removeItem('adminKey');
        localStorage.removeItem('user');
        localStorage.removeItem('accountType');
        navigate('/');
    }

    return (
        <button className='adminLogout' onClick={handleAdminLogOut}>Log Out</button>
    )
}

export default AdminLogout