import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { instituteDetails } from '../../data';
import ExtUserJumboTron from '../../components/Jumbotron/JumbotronExtUser';
import JumbotronFaculty from '../../components/Jumbotron/JumbotronFaculty';

const Home = (props) => {
    const accountType = props.accountType;
    

    return (
        <>
            <NavBar instituteDetails={instituteDetails} />
            {String(localStorage.getItem('accountType')) === 'External User' ? (
                <ExtUserJumboTron />
            ) : (
                String(localStorage.getItem('accountType')) === 'Faculty' && <JumbotronFaculty />
            )}
        </>

    );
};

export default Home;
