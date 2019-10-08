import React, { useState } from 'react'
import RecipeForm from './RecipeForm'

const TacoList = () => {
    const [taco, setTaco] = useState({ taco: '', ingredient: '' });
    const searchTacos = (recipe, ingredient) => {
        fetch('../tacos.json').then(data => console.log(data));
    }
    return (
        <div className="taco-list">
            <RecipeForm searchTacos={searchTacos} />
        </div>
    );
}
 
export default TacoList;