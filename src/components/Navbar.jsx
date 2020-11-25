import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="home-link" to="/">
        <img
          src="https://cdn.discordapp.com/attachments/768398692226433034/771658707343769610/pexels-photo-1070880.png"
          alt="logo"
          className="navbar-logo"
        />
      </Link>
      <div className="menucenter">
        <ul>
          <li>
            <span role="img" aria-label="Home">
              🏘️
            </span>
            <Link to="/" className="cool-link">
              Home
            </Link>
          </li>
          <li>
            <span role="img" aria-label="Mea by Area">
              🍔
            </span>
            <Link to="/meal-area" className="cool-link">
              Meal by Area
            </Link>
          </li>
          <li>
            <span role="img" aria-label="Favorite">
              ⭐
            </span>
            <Link to="/fav" className="cool-link">
              Favorite
            </Link>
          </li>
          <li>
            <span role="img" aria-label="Who you are?">
              🙍‍♂️
            </span>
            <Link to="/who-are-we" className="cool-link">
              Who are we ?
            </Link>
          </li>
          <li>
            <span role="img" aria-label="Contact">
              📝
            </span>
            <Link to="/contact-form" className="cool-link">
              Contact
            </Link>
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
