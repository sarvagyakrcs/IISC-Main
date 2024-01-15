import React from 'react'
import './navbar.modules.css'
import logo from './images/iiscLogo.png';
import NavMenu from '../NavMenu/navMenu';
import { getMenuOptions } from '../../data';
import { SignOutButton } from '../Login/SignOutButton';
import ExtUserJumboTron from '../Jumbotron/JumbotronExtUser';
import AdminLogout from '../../pages/home/AdminLogin/adminLogout';

const NavBar = (props) => {

    const accountType = localStorage.getItem('accountType');
    const menuOptions = getMenuOptions(accountType);
    let username = 'N.A';
    let name = 'N.A';

    if (accountType === 'Admin') {
        const userDetails = localStorage.getItem("user")
        console.log(userDetails);
        username = userDetails.username;
    }
    else {
        const userDetails = localStorage.getItem("user") 
        const userDetailsJson = JSON.parse(userDetails);
        username = userDetailsJson.userDetails.username;
        name = userDetailsJson['userDetails']['name'];
    }

    const mainBar = (
        <div className="navBar navBarComplete">
            <nav className="nav-Bar">
                <div className="nav-logo">
                    <img className="logo-image" src={logo} alt="" />
                    <div className="logo-text">
                        <h1>{props.instituteDetails['name-english']}</h1>
                        <h2>{props.instituteDetails['location-english']}</h2>
                        <h3>{props.instituteDetails['name-hindi']}</h3>
                        <h3>{props.instituteDetails['location-hindi']}</h3>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="navMenu">
                    <NavMenu MenuOptions={menuOptions} />
                </div>
                <div className="NIS-logo">
                    <h1 className="largeText">NIS</h1>
                </div>
            </nav>
            <nav className="nav-lower">
                <h3>
                    <pre>Welcome, </pre>
                </h3>
                <pre style={{ color: 'navy' }}>
                    {name == 'N.A' ? 'Admin' : name}
                </pre>
                <pre style={{ color: 'white' }}> | </pre>
                <pre style={{ color: 'navy' }}>{username}</pre>
                {/* <SignOutButton /> */}
                {accountType === 'Admin' ? <AdminLogout /> : <SignOutButton />}
            </nav>
            {/* <ExtUserJumboTron /> */}
        </div>
    )
    return (
        <>
            {mainBar}
        </>
    )
}


export default NavBar