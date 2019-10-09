import React, { useState, useEffect } from 'react'
import RecipeForm from './RecipeForm'

const TacoList = () => {
    let [combination, setCombination] = useState('');
    let [tacos, setTacos] = useState('');
    const saveCombination = (baseLayer, condiment, mixing, seasoning, shell) => {
        setCombination(combination = { baseLayer: baseLayer, condiment: condiment, mixing: mixing, seasoning: seasoning, shell: shell });
    }
    useEffect(() => {
        console.log('the tacolist component rerendered');

        fetch('../tacos.json')
        .then(response => response.json()) 
        .then(data => {
            setTacos(data);
        })

    }, [combination])
    return (
        <div className="taco-list">
            <RecipeForm saveCombination={saveCombination} tacos={tacos} />
        </div>
    );
}
 
export default TacoList;