import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  };

  handleClickCloseBurgerMenu = () => {
    this.setState({ clicked: false });
  };

  render() {
    const { clicked } = this.state;
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
          <button
            type="button"
            className="menu-icon"
            onClick={this.handleClick}
          >
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
          <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <span role="img" aria-label="Home">
                🏘️
              </span>
              <Link
                to="/"
                className="cool-link"
                onClick={this.handleClickCloseBurgerMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <span role="img" aria-label="Mea by Area">
                🍔
              </span>
              <Link
                to="/meal-area"
                className="cool-link"
                onClick={this.handleClickCloseBurgerMenu}
              >
                Meal by Area
              </Link>
            </li>
            <li>
              <span role="img" aria-label="Favorite">
                ⭐
              </span>
              <Link
                to="/fav"
                className="cool-link"
                onClick={this.handleClickCloseBurgerMenu}
              >
                Favorite
              </Link>
            </li>
            <li>
              <span role="img" aria-label="Who you are?">
                🙍‍♂️
              </span>
              <Link
                to="/who-are-we"
                className="cool-link"
                onClick={this.handleClickCloseBurgerMenu}
              >
                Who are we ?
              </Link>
            </li>
            <li>
              <span role="img" aria-label="Contact">
                📝
              </span>
              <Link
                to="/contact-form"
                className="cool-link"
                onClick={this.handleClickCloseBurgerMenu}
              >
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
}

export default Navbar;
