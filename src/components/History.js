import React, { useContext } from 'react'
import { NavContext } from '../contexts/NavContext';
import uuid from 'uuid/v1'
import { CombinationContext } from '../contexts/CombinationContext';

const Favorites = (props) => {
    let { toggleNav } = useContext(NavContext);
    let { saveCombination } = useContext(CombinationContext);
    let history = localStorage.getItem('combinationsArray');
    let historyArray = [];
    historyArray.push(JSON.parse(history));
    historyArray = historyArray[0];

    const orderAgain = (e) => {
        const combination = e.target.parentElement;
        const historyCombination = {
            baseLayer: combination.children[0].children[1].textContent,
            condiment: combination.children[2].children[1].textContent,
            mixing: combination.children[3].children[1].textContent,
            seasoning: combination.children[4].children[1].textContent,
            shell: combination.children[5].children[1].textContent
        };
        saveCombination(historyCombination.baseLayer, historyCombination.condiment, historyCombination.mixing, historyCombination.seasoning, historyCombination.shell);
        props.history.push('/checkout');
    }

    return (
        <div className="history-container" >
        <div style={{position: 'absolute', marginTop: '0%', marginRight: '0%', zIndex: '1000', fontSize: '1.5vw'}} ><a target="_blank" href="https://icons8.com/icons/set/taco">Taco</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
            <img className="menu" src={require("../img/tacomenu.png")} onClick={toggleNav} />
            <div className="history-title">YOUR ORDER HISTORY</div>
            <div className="history-list">
            { Array.isArray(historyArray) && historyArray.map(item => {
            return  <div className="history-item" key={uuid()} id={item.baseLayer} >    
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)'}}><div style={{color: 'red', marginLeft: '2.5%'}}>Base layer</div><div style={{ marginLeft: '2.5%' }}>{ item.baseLayer }</div></div>
                        <img className="history-image" src={require('../img/taco-cards.jpg')} alt="tacomenu" />
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}><div style={{color: 'red', marginLeft: '2.5%'}}>Condiment</div><div>{ item.condiment }</div></div>
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}><div style={{color: 'red', marginLeft: '2.5%'}}>Mixing</div><div>{ item.mixing }</div></div>
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}><div style={{color: 'red', marginLeft: '2.5%'}}>Seasoning</div><div>{ item.seasoning }</div></div>      
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}><div style={{color: 'red', marginLeft: '2.5%'}}>Shell</div><div>{ item.shell }</div></div>      
                        <button className="order-again-button" onClick={orderAgain}>Click to order again</button>
                    </div>    
            })}
            </div>

        </div>
    );
}
 
export default Favorites;