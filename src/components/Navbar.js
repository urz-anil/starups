import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">STARUPS</div>
      <div className="nav-buttons">
        <button className="nav-button">About</button>
        <button className="nav-button">User Types</button>
        <button className="nav-button">Features </button>
         <button className="nav-button">Benefits</button>
        <button className="nav-button">Success Stories</button>
        <button className="nav-button login-button">Log In</button>
        <button className="nav-button register-button">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;