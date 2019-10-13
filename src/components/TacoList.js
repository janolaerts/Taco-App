import React, { useState, useContext } from 'react'
import { CombinationContext } from '../contexts/CombinationContext'
import OrderForm from './OrderForm'
import Checkout from './Checkout';

const TacoList = () => {
    let { combination, saveCombination } = useContext(CombinationContext);
    return (
        <div className="taco-list">
            <OrderForm saveCombination={saveCombination} combination={combination} />
        </div>
    );
}
 
export default TacoList;