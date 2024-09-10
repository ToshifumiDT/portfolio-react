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
      >
        <div></div> 
      </button>
      {isOpen && (
        <>
        
          <div className={styles.overlay} onClick={toggleMenu}></div>

        
          <nav className={styles.nav}>
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
