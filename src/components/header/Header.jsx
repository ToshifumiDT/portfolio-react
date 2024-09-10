import React from 'react';
import NavBar from './NavBar';
import HamburgerMenu from './HamburgerMenu';
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="../logo2.png" alt="Logo" className="logo" /> 
        <div className="title">Toshifumi Kamino</div> 
      </div>
      

      <NavBar />
      <HamburgerMenu />
    </header>
  );
}


export default Header;
