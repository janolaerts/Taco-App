import React, { useContext } from 'react'
import { NavContext } from '../contexts/NavContext';
import uuid from 'uuid/v1'

const Favorites = () => {
    let { toggleNav } = useContext(NavContext);
    let favorites = localStorage.getItem('combinationsArray');
    let favoritesArray = [];
    favoritesArray.push(JSON.parse(favorites));
    favoritesArray = favoritesArray[0];

    return (
        <div className="favorites" >
            <img className="menu" src={require("../img/tacomenu.png")} onClick={toggleNav} />
            <div className="favorites-title">YOUR ORDER HISTORY</div>

            <div className="favorites-list">
            { Array.isArray(favoritesArray) && favoritesArray.map(favorite => {
            return  <div className="favorite" key={uuid()}>    
                        <div>{ favorite.baseLayer }</div>
                        <div>{ favorite.condiment }</div>
                        <div>{ favorite.mixing }</div>
                        <div>{ favorite.seasoning }</div>
                        <div>{ favorite.Shell }</div>
                    </div>    
            })}
            </div>

        </div>
    );
}
 
export default Favorites;