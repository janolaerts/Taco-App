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
    let [allSelected, setAllSelected] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();
        setBaseLayer('');
        setCondiment('');
        setMixing('');
        setSeasoning('');
        setShell('');
        if(baseLayer === '' || condiment === '' || mixing === '' || seasoning === '' || shell === ''){
            setAllSelected(false);
        }
        else{
            setAllSelected(true);
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
            <div className="error-text" style={{display: allSelected ? 'none' : 'block'}}>{ allSelected ? '' : 'Please select one ingredient of each section' }</div>
            <div style={{position: 'absolute', marginTop: '0%', marginRight: '0%', zIndex: '1000', fontSize: '1.5vw'}} ><a target="_blank" href="https://icons8.com/icons/set/taco">Taco</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
            <input type="submit" className="submit" />
        </form>
    );
}
 
export default RecipeForm;