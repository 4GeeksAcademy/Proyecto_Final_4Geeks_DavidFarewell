import React, { useState } from 'react';
import styles from '../assets/styles/Navbar.module.css';
import { Link } from 'react-router-dom';

const podcast = <i className="fas fa-microphone"></i>
const video = <i className="fas fa-video"></i>
const task = <i className="fas fa-clipboard-list"></i>

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isMobileMenuOpen ? styles.navbarOpen : ''}`}>
      {/* Mostrar solo en modo normal */}
      {!isMobileMenuOpen && (
          <div className={styles.navbarLogo}>
            <Link to="/profile2">
              <h2>Level <span className={styles.navbarUp}>Up</span></h2>
            </Link>
          </div>
      )}

      {/* Menú Texto */}
      <div className={styles.navbarText}>
        <Link to="/profile2">
          <p>Home</p>
        </Link>

        {/* Content con menú desplegable */}
        <div className={styles.dropdown}>
          <p onClick={toggleDropdown}>Content</p>
          {openDropdown && (
            <div className={styles.dropdownMenu}>
              <Link to="/videos">
                <p style={{gap:"0.5rem"}}>{video} Videos</p>
              </Link>
              <Link to="/podcasts">
                <p style={{gap:"0.5rem"}}>{podcast} Podcasts</p>
              </Link>
              <Link to="/tasks">
                <p style={{gap:"0.5rem"}}>{task} Tasks</p>
              </Link>
            </div>
          )}
        </div>

        <Link to="/journey">
          <p>Journey</p>
        </Link>
      </div>

      {/* Mostrar solo en modo normal */}
      {!isMobileMenuOpen && (
        <div className={styles.navbarProfile}>
          <Link to="/profile2">
            <img
              src="src/front/assets/styles/images/ProfilePhoto.jpg"
              alt="Avatar"
              className={styles.navbarImage}
            />
          </Link>
          <div className={styles.navbarProfileContent}>
            <p className={styles.navbarLevelText}>Lvl 6</p>
            <div className={styles.navbarLevelBar}>
              <div className={styles.navbarLevelFill}></div>
            </div>
            <p className={styles.navbarXP}>200 / 1000</p>
          </div>
        </div>
      )}

      {/* Menú hamburguesa para móviles */}
      <div className={styles.hamburgerMenu} onClick={toggleMobileMenu}>
        <div className={styles.hamburgerIcon}></div>
        <div className={styles.hamburgerIcon}></div>
        <div className={styles.hamburgerIcon}></div>
      </div>

      {/* Menú desplegable en móvil */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.closeButton} onClick={toggleMobileMenu}>
            X
          </div>
          <div className={styles.navbarProfile}>
            <img
              src="src/front/assets/styles/images/ProfilePhoto.jpg"
              alt="Avatar"
              className={styles.navbarImage}
            />
            <div className={styles.navbarProfileContent}>
              <p className={styles.navbarLevelText}>Lvl 6</p>
              <div className={styles.navbarLevelBar}>
                <div className={styles.navbarLevelFill}></div>
              </div>
              <p className={styles.navbarXP}>200 / 1000</p>
            </div>
          </div>
          <div className={styles.mobileLinks}>
            <Link to="/profile2">
              <p>Home</p>
            </Link>
            <Link to="/journey">
              <p>Journey</p>
            </Link>
            <div onClick={toggleDropdown}>
              <p>Content</p>
              {openDropdown && (
                <div className={styles.dropdownMenu}>
                  <Link to="/videos">
                    <p>Videos</p>
                  </Link>
                  <Link to="/podcasts">
                    <p>Podcasts</p>
                  </Link>
                  <Link to="/tasks">
                    <p>Tasks</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
