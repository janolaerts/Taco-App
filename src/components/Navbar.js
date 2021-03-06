import React, { useContext } from 'react'
import { NavContext } from '../contexts/NavContext';

const Navbar = () => {
    const { showNav, toggleNav } = useContext(NavContext);
    return (
        <div className="navbar" >
            <nav style={{visibility: showNav ? 'visible' : 'hidden' }}>
                <img className="menu" src={require("../img/tacomenu.png")} onClick={toggleNav}/>
                <ul>
                    <li><a href="/">Order</a></li>
                    <li><a href="/history">Order history</a></li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;