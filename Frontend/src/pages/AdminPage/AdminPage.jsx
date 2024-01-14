import React from 'react'
import { Link, useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom
import JumbotronAdmin from '../../components/Jumbotron/JumbotronAdmin';
import Home from '../home/home';

const AdminPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Home />
        </>
    )
}

export default AdminPage