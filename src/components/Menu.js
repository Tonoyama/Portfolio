import React from 'react';
import './assets/styles/Menu.css';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <div class="menu">
                <label for="menu_bar01">Menu</label>
                <input type="checkbox" id="menu_bar01" class="accordion" />
                <ul id="links01">
                    <li class="line1"><NavLink to='/' exact>Tonoyama</NavLink></li>
                    <li class="line2"><NavLink to='/works' exact>Works</NavLink></li>
                    <li><NavLink to='/contact' exact>Contact</NavLink></li>
                </ul>
            </div>
        )
    }
}
export default Menu