import React from 'react';
import './Navigation.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="Button">
      <NavLink to='/' exact>Tonoyama</NavLink>
      <NavLink to='/about' exact>About</NavLink>
      <NavLink to='/contact' exact>Contact</NavLink>
    </div>
  );
}

export { Navigation };
