import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const activeStyle = {
  fontWeight: 'bold',
  textDecoration: 'underline',
  color: '#161616',
};

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav">
        <NavLink end style={({ isActive }) => (isActive ? activeStyle : null)} to=".">
          DashBoard
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : null)} to="income">
          Income
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : null)} to="review">
          Review
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : null)} to="vans">
          Vans
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
