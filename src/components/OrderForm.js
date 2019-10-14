import React, { useState, useEffect, useContext } from 'react'
import { CombinationContext } from '../contexts/CombinationContext';
import BaseLayers from './BaseLayers';
import Condiments from './Condiments';
import Mixings from './Mixings';
import Seasonings from './Seasonings';
import Shells from './Shells';


const RecipeForm = (props) => {
    let { saveCombination } = useContext(CombinationContext);
    const [baseLayer, setBaseLayer] = useState('');
    const [condiment, setCondiment] = useState('');
    const [mixing, setMixing] = useState('');
    const [seasoning, setSeasoning] = useState('');
    const [shell, setShell] = useState('');
    let [tacos, setTacos] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        saveCombination(baseLayer, condiment, mixing, seasoning, shell);
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
        <form onSubmit={(e) => {
            submitHandler(e);
            props.history.push('/checkout');
        }} >
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