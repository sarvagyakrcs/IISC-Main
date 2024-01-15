import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { instituteDetails } from '../../data';
import ExtUserJumboTron from '../../components/Jumbotron/JumbotronExtUser';
import JumbotronFaculty from '../../components/Jumbotron/JumbotronFaculty';
import JumbotronAdmin from '../../components/Jumbotron/JumbotronAdmin';
import NoLogin from '../NoLogin/NoLogin';
import { adminKey } from '../../data';

const Home = (props) => {
    const accountType = localStorage.getItem('accountType');
    const userString = localStorage.getItem('user');
    
    // Check if userString is truthy before parsing
    const accessToken = userString ? JSON.parse(userString) : null;
    const [token, setToken] = useState(accessToken?.accessToken);

    if(accountType === 'Admin' && !token) {
        setToken(adminKey);
    }

    const noLogin = (
        <NoLogin />
    );

    const isLoggedIn = (
        <>
            <NavBar instituteDetails={instituteDetails} />
            {accessToken && accountType === 'External User' ? (
                <ExtUserJumboTron />
            ) : accessToken && accountType === 'Faculty' ? (
                <JumbotronFaculty />
            ) : accessToken && accountType === 'Admin' ? (
                <JumbotronAdmin />
            ) : null}
        </>
    );

    return (
        <>
            {token ? isLoggedIn : noLogin}
        </>
    );
};

export default Home;
