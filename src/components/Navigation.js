import React from 'react';
import './assets/styles/Navigation.css'
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive'

const Navigation = () => {
  return (
    <div className="Navigation">
      <MediaQuery query="(min-width: 780px)">
        <div className="Button">
          <NavLink to='/' exact>Tonoyama</NavLink>
          <NavLink to='/works' exact>Works</NavLink>
          <NavLink to='/contact' exact>Contact</NavLink>
        </div>
      </MediaQuery>
    </div>
  );
}

export { Navigation };
