import React, { useContext, useState } from 'react'
import { NavContext } from '../contexts/NavContext';

const Favorites = () => {
    let { toggleNav } = useContext(NavContext);
    let [favorites, setFavorites] = useState(localStorage.getItem('combinations'));
    console.log(favorites);
    return (
        <div className="favorites" >
            <img className="menu" src={require("../img/tacomenu.png")} onClick={toggleNav} />
            <div className="favorites-title">YOUR FAVORITES</div>
            <div>{ favorites }</div>
        </div>
    );
}
 
export default Favorites;