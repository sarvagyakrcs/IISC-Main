import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navMenu.modules.css';
import BurgerButton from './images/burgerButton.png';
import exitButton from './images/exitButton.png';
import { getMenuOptions } from '../../data';

const NavMenu = (props) => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setTimeout(() => {
            setMenuOpen((prev) => !prev);
        }, 100);
    }, [setMenuOpen]);

    const accountType = localStorage.getItem('accountType');
    const menuOptions = getMenuOptions(String(accountType));

    const handleMenuItemClick = (key) => {
        // Use navigate for programmatic navigation
        navigate(`/home/${key.toLowerCase()}`);
        // Close the menu
        setMenuOpen(false);
    };

    const menu = (
        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <h1>Menu</h1>
            <div className="exitButton" style={{ position: 'absolute', top: 0, right: 0 }}>
                <button onClick={toggleMenu}><img src={exitButton} alt="Exit" /></button>
            </div>
            {Object.entries(menuOptions).map(([key, value], index) => (
                <div className="menu-item" key={index}>
                    {/* Use onClick to handle navigation */}
                    <div className="menu-item" onClick={() => handleMenuItemClick(key)}>
                        <h2>{value.menuOption}</h2>
                        <img src={value.icon} alt={value.menuOption} />
                    </div>
                </div>
            ))}
        </div>
    );

    const burgerButton = (
        <div className="burgerButton" onClick={toggleMenu}>
            <img src={BurgerButton} alt="" />
            {/* <h2>Menu</h2> */}
        </div>
    );

    return (
        <div className="mainContainer">
            {menuOpen ? menu : burgerButton}
        </div>
    );
};

export default NavMenu;
