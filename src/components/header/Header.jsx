
import React from 'react';
import Navbar from './Navbar';
import HamburgerMenu from './HamburgerMenu';
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="../logo2.png" alt="Logo" className="logo" /> 
        <div className="title">Toshifumi Kamino</div> 
      </div>
      

      <Navbar />
      <HamburgerMenu />
    </header>
  );
}

export default Header;
