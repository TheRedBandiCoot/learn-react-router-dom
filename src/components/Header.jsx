import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
          <NavLink className={({ isActive }) => (isActive ? 'host-nav-link' : null)} to="/Host">
            Host
          </NavLink>
          <NavLink style={({ isActive }) => (isActive ? activeStyle : null)} to="/vans">
            Vans
          </NavLink>
          <Link className="about" to="/about">
            About
          </Link>
          {/* <Link to="/books">Books</Link>
        <Link to="/books/1">Book One</Link> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
