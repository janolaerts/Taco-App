import React, { useState } from 'react'
import OrderForm from './OrderForm'

const TacoList = () => {
    let [combination, setCombination] = useState('');
    const saveCombination = (baseLayer, condiment, mixing, seasoning, shell) => {
        setCombination(combination = { baseLayer: baseLayer, condiment: condiment, mixing: mixing, seasoning: seasoning, shell: shell });
        checkout();
    }
    const checkout = () => {
        console.log(combination);
    }
    return (
        <div className="taco-list">
            <OrderForm saveCombination={saveCombination} combination={combination} />
        </div>
    );
}
 
export default TacoList;