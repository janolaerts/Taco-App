import React, { useState } from 'react'

const RecipeForm = (props) => {
    const [recipe, setRecipe] = useState('');
    const [ingredient, setIngredient] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        props.getTacos(recipe, ingredient);
        setRecipe('');
        setIngredient('');
    }
    return (
        <form onSubmit={submitHandler} >
            <input value={recipe} className="one" type="text" placeholder="Which recipe are you looking for?" onChange={(e) => setRecipe(e.target.value)} required />
            <input value={ingredient} className="two" type="text" placeholder="Which ingredient must be present on the taco?" onChange={(e) => setIngredient(e.target.value)} required />
            <input type="submit" className="submit" />
        </form>
    );
}
 
export default RecipeForm;