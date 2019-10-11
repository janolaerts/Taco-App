import React, { useState, useEffect } from 'react'
import RecipeForm from './RecipeForm'

const TacoList = () => {
    //let [tacos, setTacos] = useState();
    let [combination, setCombination] = useState('');
    const saveCombination = (baseLayer, condiment, mixing, seasoning, shell) => {
        setCombination(combination = { baseLayer: baseLayer, condiment: condiment, mixing: mixing, seasoning: seasoning, shell: shell });
        console.log(combination);
    }
    return (
        <div className="taco-list">
            <RecipeForm saveCombination={saveCombination} />
        </div>
    );
}
 
export default TacoList;