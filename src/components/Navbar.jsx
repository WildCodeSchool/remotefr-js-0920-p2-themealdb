import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img
        src="https://cdn.discordapp.com/attachments/768398692226433034/771658707343769610/pexels-photo-1070880.png"
        alt="logo"
        className="navbar-logo"
      />
      <div className="menucenter">
        <ul>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/whoAreWe">Who are we ?</a>
          </li>
        </ul>
        <div className="title">
          <h1>The Traveling Taste Buds: The Return</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
