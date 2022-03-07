import React from 'react';
import './navbar.css';
import {ReactComponent as Logo} from '../../images/logo.svg';
import {BiMenu} from 'react-icons/bi';

const Navbar = () => {

  return (
    <header>
        <div className="nav-list">
            <div className="logo-wrapper">
                <Logo />
            </div>
    
            <nav id="nav-items">
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
            </nav>
        </div>

        <div className="login">
            <button id="login-btn">Login</button>
            <button id="signup-btn">Sign Up</button>
        </div>
        <BiMenu id="menu" />
    </header>
  )
}

export default Navbar