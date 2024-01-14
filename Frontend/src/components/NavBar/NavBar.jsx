import React from 'react'
import './navbar.modules.css'
import logo from './images/iiscLogo.png';
import NavMenu from '../NavMenu/navMenu';
import { menuOptions } from '../../data';
import { SignOutButton } from '../Login/SignOutButton';
import ExtUserJumboTron from '../Jumbotron/JumbotronExtUser';

const NavBar = (props) => {

    const userDetails = localStorage.getItem("user")
    const userDetailsJson = JSON.parse(userDetails);
    const username = userDetailsJson.userDetails.username;
    const name = userDetailsJson['userDetails']['name'];

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
                    {name}
                </pre>
                <pre style={{ color: 'white' }}> | </pre>
                <pre style={{ color: 'navy' }}>{username}</pre>
                <SignOutButton />
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