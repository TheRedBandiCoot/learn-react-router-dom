import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import img from '../assets/images/avatar-icon.svg';

const activeStyle = {
  fontWeight: 'bolder',
  textDecoration: 'underline',
  color: 'green',
};

const Header = () => {
  return (
    <>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <NavLink className={({ isActive }) => (isActive ? 'host-nav-link' : null)} to="host">
            Host
          </NavLink>
          <NavLink style={({ isActive }) => (isActive ? activeStyle : null)} to="vans">
            Vans
          </NavLink>
          <Link to="login" className="login-link">
            <svg
              className="login-icon"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="30.000000pt"
              height="31.000000pt"
              viewBox="0 0 30.000000 31.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,31.000000) scale(0.100000,-0.100000)"
                // fill="#000000"
                stroke="none"
              >
                <path
                  d="M78 289 c-43 -22 -78 -81 -78 -129 0 -76 74 -150 150 -150 76 0 150
                  74 150 150 0 50 -35 107 -80 130 -49 25 -94 25 -142 -1z m126 -24 c56 -27 79
-89 56 -150 -8 -22 -13 -24 -29 -15 -25 13 -136 13 -161 0 -37 -20 -53 54 -25
114 29 60 95 81 159 51z m6 -192 c23 -7 -17 -33 -51 -33 -38 0 -84 19 -73 30
18 17 76 19 124 3z"
                />
                <path
                  d="M110 230 c-11 -11 -20 -29 -20 -40 0 -26 34 -60 60 -60 11 0 29 9 40
20 25 25 25 55 0 80 -11 11 -29 20 -40 20 -11 0 -29 -9 -40 -20z m65 -40 c0
-18 -6 -26 -23 -28 -13 -2 -25 3 -28 12 -10 26 4 48 28 44 17 -2 23 -10 23
-28z"
                />
              </g>
            </svg>
          </Link>
          {/* <Link className="about" to="/about">
            About
          </Link> */}
          {/* <Link to="/books">Books</Link>
        <Link to="/books/1">Book One</Link> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
