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
    let [allSelected, setAllSelected] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        setBaseLayer('');
        setCondiment('');
        setMixing('');
        setSeasoning('');
        setShell('');
        if(baseLayer === '' || condiment === '' || mixing === '' || seasoning === '' || shell === ''){
            setAllSelected(false);
            console.log(allSelected);
        }
        else{
            saveCombination(baseLayer, condiment, mixing, seasoning, shell);
            props.history.push('/checkout');
        }
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
        }} >
            <BaseLayers tacos={tacos} setBaseLayer={setBaseLayer} />
            <Condiments tacos={tacos} setCondiment={setCondiment} />
            <Mixings tacos={tacos} setMixing={setMixing} />
            <Seasonings tacos={tacos} setSeasoning={setSeasoning} />
            <Shells tacos={tacos} setShell={setShell} />
            <input type="submit" className="submit" />
            <div style={{position: 'relative', left: '-25%'}} ><a target="_blank" href="https://icons8.com/icons/set/taco">Taco</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
            <div className="error-text">{ allSelected ? '' : 'Please select one ingredient of each section' }</div>
        </form>
    );
}
 
export default RecipeForm;