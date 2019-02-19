import React from "react";
import "./header.css";

import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    open: false,
  };

  menuToggle = () => {
    const currentState = this.state.open;
    this.setState({ open: !currentState });
  };
  render() {
    return (
      <header className="header">
        <section className="main-section">
          <Link className="lockup" to="/">
            <svg
              className="header-logo"
              aria-labelledby="curenetics"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 236.83 231.2"
            >
              <title id="curenetics" lang="en">
                Curenetics Clinical Trials
              </title>
              <ellipse className="ellipse" cx="44.97" cy="43.91" rx="44.97" ry="43.91" />
              <ellipse className="ellipse" cx="44.97" cy="187.29" rx="44.97" ry="43.91" />
              <ellipse className="ellipse" cx="191.87" cy="187.29" rx="44.97" ry="43.91" />
              <ellipse className="ellipse" cx="191.4" cy="43.91" rx="44.97" ry="43.91" />

              <rect className="rect" x="55.67" y="35.58" width="120" height="16.67" />
              <rect className="rect" x="53.91" y="178.95" width="120" height="16.67" />
              <rect
                className="rect"
                x="-41.68"
                y="100.89"
                width="173.62"
                height="18.4"
                transform="translate(-65.12 155.13) rotate(-90)"
              />
            </svg>
            <h1 className="app-title">Curenetics</h1>
          </Link>

          <div className={this.state.open ? "menu-container open" : "menu-container"}>
            <button
              onClick={this.menuToggle}
              className={this.state.open ? "menu-button open" : "menu-button"}
            >
              <svg
                className="menu-img"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path d="M12 20c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm24 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-12 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
              </svg>
            </button>
            <ul className="nav-menu">
              <li className="menu-title">Menu</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/basic-info">Your Search</Link>
              </li>
              <li>
                <Link to="/trials">All Trials</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
