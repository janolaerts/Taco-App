import React from 'react'

const Checkout = (props) => {
    let combination = props.combination;
    return (
        <div style={{color: 'white', fontWeight: 'bold'}}>You have chosen the following combination for your taco: 
            <div>Base Layer: { combination.baseLayer }</div>
            <div>Condiment: { combination.condiment }</div>
            <div>Mixing: { combination.mixing }</div>
            <div>Seasoning: { combination.seasoning }</div>
            <div>Shell: { combination.shell }</div>
        </div>
    );
}
 
export default Checkout;