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
        <div></div> {/* 三 */}
      </button>
      {isOpen && (
        <>
          <div className={styles.overlay} onClick={toggleMenu}></div>
          <nav className={styles.nav}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}

export default HamburgerMenu;
