// Header.jsx
import React from 'react';
import NavBar from './Navbar';
import HamburgerMenu from './HamburgerMenu';
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="title">Toshifumi Kamino</div>
      <NavBar />
      <HamburgerMenu />
    </header>
  );
}

export default Header;