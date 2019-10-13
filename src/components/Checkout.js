import React,{ useContext } from 'react'
import { CombinationContext } from '../contexts/CombinationContext';

const Checkout = (props) => {
    let { combination } = useContext(CombinationContext);
    return (
        <div>
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
            </div>
        </div>
    );
}
 
export default Checkout;