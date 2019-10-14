import React, { useContext, useState } from 'react'
import { VegetarianContext } from '../contexts/VegetarianContext'

const Navbar = () => {
    const { toggleVegetarian } = useContext(VegetarianContext);
    let [showNav, setShowNav] = useState(true);
    return (
        <div className="navbar" >
            <nav style={{visibility: showNav ? 'visible' : 'hidden' }}>
                <div className="close" onClick={() => {
                    setShowNav(!showNav);
                }}>
                    <img className="close" src={require("../img/tacomenu.png")} />
                </div>
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