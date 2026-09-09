// HamburgerMenu.jsx
import React from 'react';
import styles from './HamburgerMenu.module.css';
import { useHamburger } from './HamburgerContext';

function HamburgerMenu() {
  const { isOpen, toggleMenu } = useHamburger();

  return (
    <div className={styles['hamburger-menu']}>
      <button
        className={`${styles['hamburger-button']} ${isOpen ? styles.active : ''}`} 
        onClick={toggleMenu}
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <div aria-hidden="true"></div>
      </button>
      {isOpen && (
        <>
        
          <div className={styles.overlay} onClick={toggleMenu}></div>

        
          <nav id="mobile-navigation" className={styles.nav} aria-label="Mobile navigation">
            <ul>
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}


export default HamburgerMenu;
