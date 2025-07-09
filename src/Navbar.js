import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Earthquake Dashboard</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/predict">Predict</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
