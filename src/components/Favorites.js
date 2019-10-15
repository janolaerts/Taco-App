import React, { useContext } from 'react'
import { NavContext } from '../contexts/NavContext';

const Favorites = () => {
    let { toggleNav } = useContext(NavContext);
    let favorites = localStorage.getItem('combinationsArray');
    let favoritesArray = [];
    favoritesArray.push(JSON.parse(favorites));
    favoritesArray = favoritesArray[0];

    return (
        <div className="favorites" >
            <img className="menu" src={require("../img/tacomenu.png")} onClick={toggleNav} />
            <div className="favorites-title">YOUR FAVORITES</div>
            <div>{ favorites }</div>
        </div>
    );
}
 
export default Favorites;