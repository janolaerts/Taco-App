import React, { useContext } from 'react'
import { VegetarianContext } from '../contexts/VegetarianContext'
import { NavContext } from '../contexts/NavContext';

const Navbar = () => {
    const { toggleVegetarian } = useContext(VegetarianContext);
    const { showNav, toggleNav } = useContext(NavContext);
    return (
        <div className="navbar" >
            <nav style={{visibility: showNav ? 'visible' : 'hidden' }}>
                    <img className="close" src={require("../img/tacomenu.png")} onClick={toggleNav}/>
                <ul>
                    <li><a href="/">Order</a></li>
                    <li><a href="/about">About</a></li>
                    <li className="vegetarian"><a onClick={toggleVegetarian}>Are you vegetarian?</a></li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;