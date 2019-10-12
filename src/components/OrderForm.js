import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1'
import BaseLayers from './BaseLayers';
import Condiments from './Condiments';
import Mixings from './Mixings';
import Seasonings from './Seasonings';
import Shells from './Shells';

const RecipeForm = (props) => {
    const [baseLayer, setBaseLayer] = useState('');
    const [condiment, setCondiment] = useState('');
    const [mixing, setMixing] = useState('');
    const [seasoning, setSeasoning] = useState('');
    const [shell, setShell] = useState('');
    let [tacos, setTacos] = useState('');

    Array.isArray(tacos.base_layer) && tacos.base_layer.forEach(baseLayer => {
        let baseLayerIngredientsArrays = baseLayer.ingredients;
        console.log(baseLayerIngredientsArrays);
    })

    const submitHandler = (e) => {
        e.preventDefault();
        props.saveCombination(baseLayer, condiment, mixing, seasoning, shell);
        setBaseLayer('');
        setCondiment('');
        setMixing('');
        setSeasoning('');
        setShell('');
    }
    useEffect(() => {
        const fetchData = async () => {
            fetch('../tacos.json')
                .then(response => response.json()) 
                .then(data => {
                    setTacos(data);
                })
        }
        fetchData();

    }, [])
    return (
        <form onSubmit={submitHandler} >
            <BaseLayers tacos={tacos} setBaseLayer={setBaseLayer} />
            <Condiments tacos={tacos} setCondiment={setCondiment} />
            <Mixings tacos={tacos} setMixing={setMixing} />
            <Seasonings tacos={tacos} setSeasoning={setSeasoning} />
            <Shells tacos={tacos} setShell={setShell} />
            <input type="submit" className="submit" />
        </form>
    );
}
 
export default RecipeForm;