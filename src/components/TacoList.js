import React, { useState, useEffect } from 'react'
import RecipeForm from './RecipeForm'

const TacoList = () => {
    let [term, setTerm] = useState({ recipe: 'Mexican', ingredient: 'Tomato' });
    const getTacos = (recipe, ingredient) => {
        setTerm(term = { recipe: recipe, ingredient: ingredient });
    }
    useEffect(() => {
        console.log('the tacolist component rerendered');
    }, [term])
    return (
        <div className="taco-list">
            <RecipeForm getTacos={getTacos} />
        </div>
    );
}
 
export default TacoList;