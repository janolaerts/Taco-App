import React,{ useContext } from 'react'
import { CombinationContext } from '../contexts/CombinationContext';
import { NavContext } from '../contexts/NavContext';

const Checkout = (props) => {
    let { combination } = useContext(CombinationContext);
    let { toggleNav } = useContext(NavContext);
    return (
        <div>
        <div style={{position: 'absolute', marginTop: '0%', marginRight: '0%', zIndex: '1000', fontSize: '1.5vw'}} ><a target="_blank" href="https://icons8.com/icons/set/taco">Taco</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
        <img className="menu" src={require("../img/tacomenu.png")} onClick={toggleNav} />
        <div className="checkout-title">YOUR ORDER</div>
            <div className="checkout-items" >
                <div className="checkout-item">
                    <div className="checkout-item-title">Base Layer</div>
                    <img className="checkout-item-image" src={require('../img/taco-cards.jpg')} alt="taco" />
                    <div className="checkout-item-text">{ combination.baseLayer }</div>
                </div>
                <div className="checkout-item">
                    <div className="checkout-item-title">Condiment</div>
                    <img className="checkout-item-image" src={require('../img/taco-cards.jpg')} alt="taco" />
                    <div className="checkout-item-text">{ combination.condiment }</div>
                </div>
                <div className="checkout-item">
                    <div className="checkout-item-title">Mixing</div>
                    <img className="checkout-item-image" src={require('../img/taco-cards.jpg')} alt="taco" />
                    <div className="checkout-item-text">{ combination.mixing }</div>
                </div>
                <div className="checkout-item">
                    <div className="checkout-item-title">Seasoning</div>
                    <img className="checkout-item-image" src={require('../img/taco-cards.jpg')} alt="taco" />
                    <div className="checkout-item-text">{ combination.seasoning }</div>
                </div>
                <div className="checkout-item">
                    <div className="checkout-item-title">Shell</div>
                    <img className="checkout-item-image" src={require('../img/taco-cards.jpg')} alt="taco" />
                    <div className="checkout-item-text">{ combination.shell }</div>
                </div>
                <button className="checkout-edit-order" onClick={() => props.history.push('/')} >GO BACK TO THE ORDER PAGE</button>
            </div>
        </div>
    );
}
 
export default Checkout;