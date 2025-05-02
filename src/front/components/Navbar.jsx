import React, { useState } from 'react';
import '../assets/styles/navbar.css';
import profilePic from '../assets/styles/images/Moti_Feliz.webp';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null); // opcional: cerrar submenús al abrir/ocultar menú móvil
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={profilePic} alt="Profile" className="moty" />
      </div>

      {/* Botón Hamburguesa */}
      <button className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>

      {/* NAVBAR DESKTOP */}
      <div className={`navbar-center-block ${isMobileMenuOpen ? 'show' : ''}`}>
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
            Journey
          </button>
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
