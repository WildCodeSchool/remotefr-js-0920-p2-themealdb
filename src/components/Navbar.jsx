import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src="https://cdn.discordapp.com/attachments/768398692226433034/771658707343769610/pexels-photo-1070880.png"
          alt="logo"
          className="navbar-logo"
        />
      </Link>
      <div className="menucenter">
        <ul>
          <li>
            <Link to="/contact-form">Contact</Link>
          </li>
          <li>
            <Link to="/who-are-we">Who are we ?</Link>
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
