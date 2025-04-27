import React, { useState } from 'react';
import '../assets/styles/navbar.css';
import profilePic from '../assets/styles/images/Moti_Feliz.webp';


const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

    return (
        <nav className="navbar">
        <div className="navbar-left">
            <img src={profilePic} alt="Profile" className="moty" />
        </div>

        <div className="navbar-center-block">
        <div className="level-up-container">
            <span className="level-up-text">LEVEL UP</span>
        </div>

        <div className="dropdown1">
            <button className="nav-button" onClick={() => toggleDropdown('content')}>
            Content
            </button>
            {openDropdown === 'content' && (
            <div className="dropdown-menu">
                <a href="#">Videos</a>
                <a href="#">Podcasts</a>
                <a href="#">Tasks</a>
            </div>
            )}
        </div>

        <div className="dropdown2">
            <button className="nav-button" onClick={() => toggleDropdown('journey')}>
            My Journey
            </button>
            {openDropdown === 'journey' && (
            <div className="dropdown-menu">
                <a href="#">Week 1</a>
                <a href="#">Week 2</a>
                <a href="#">Week 3</a>
                <a href="#">Week 4</a>
            </div>
            )}
        </div>
        </div>


        <div className="navbar-right">
            <div className="progress-bar-container">
            <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
            </div>
            </div>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Profile" className="profile-pic" />
            </div>
        </nav>
    );
};

export default Navbar;