import React, { useContext } from 'react'
import { NavContext } from '../contexts/NavContext';
import uuid from 'uuid/v1'

const Favorites = () => {
    let { toggleNav } = useContext(NavContext);
    let history = localStorage.getItem('combinationsArray');
    let historyArray = [];
    historyArray.push(JSON.parse(history));
    historyArray = historyArray[0];

    return (
        <div className="history-container" >
            <img className="menu" src={require("../img/tacomenu.png")} onClick={toggleNav} />
            <div className="history-title">YOUR ORDER HISTORY</div>

            <div className="history-list">
            { Array.isArray(historyArray) && historyArray.map(item => {
            return  <div className="history-item" key={uuid()}>    
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)'}}><div style={{color: 'red', marginLeft: '2.5%'}}>Base layer</div><div style={{ marginLeft: '2.5%' }}>{ item.baseLayer }</div></div>
                        <img className="history-image" src={require('../img/taco-cards.jpg')} alt="tacomenu" />
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}><div style={{color: 'red', marginLeft: '2.5%'}}>Condiment</div><div>{ item.condiment }</div></div>
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}><div style={{color: 'red', marginLeft: '2.5%'}}>Mixing</div><div>{ item.mixing }</div></div>
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}><div style={{color: 'red', marginLeft: '2.5%'}}>Seasoning</div><div>{ item.seasoning }</div></div>      
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}><div style={{color: 'red', marginLeft: '2.5%'}}>Shell</div><div>{ item.shell }</div></div>      
                    </div>    
            })}
            </div>

        </div>
    );
}
 
export default Favorites;