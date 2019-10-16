import React, { useContext } from 'react'
import { VegetarianContext } from '../contexts/VegetarianContext'
import { NavContext } from '../contexts/NavContext';

const Navbar = () => {
    const { toggleVegetarian } = useContext(VegetarianContext);
    const { showNav, toggleNav } = useContext(NavContext);
    return (
        <div className="navbar" >
            <nav style={{visibility: showNav ? 'visible' : 'hidden' }}>
                <img className="menu" src={require("../img/tacomenu.png")} onClick={toggleNav}/>
                <ul>
                    <li><a href="/">Order</a></li>
                    <li><a href="/history">Order history</a></li>
                    <li className="vegetarian">Are you vegetarian?<label className="vegetarian-switch"><input type="checkbox" onClick={toggleVegetarian} /><span className="vegetarian-slider round"></span></label></li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;