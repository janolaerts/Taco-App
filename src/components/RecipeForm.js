import React, { useState } from 'react'

const RecipeForm = (props) => {
    const [baseLayer, setBaseLayer] = useState('');
    const [condiment, setCondiment] = useState('');
    const [mixing, setMixing] = useState('');
    const [seasoning, setSeasoning] = useState('');
    const [shell, setShell] = useState('');

    let tacos = props.tacos;
    console.log(tacos.condiments);
    
    const submitHandler = (e) => {
        e.preventDefault();
        props.saveCombination(baseLayer, condiment, mixing, seasoning, shell);
        setBaseLayer('');
        setCondiment('');
        setMixing('');
        setSeasoning('');
        setShell('');
    }
    return (
        <form onSubmit={submitHandler} >
            <select className="base-layer" name="baseLayer" value={baseLayer} onChange={(e) => setBaseLayer(e.target.value)} required >
                <option>SELECT BASE LAYER</option>
                <option>Mexican</option>
                <option>Asian</option>
            </select>
            <select className="condiment" name="condiment" value={condiment} onChange={(e) => setCondiment(e.target.value)} required >
                <option>SELECT CONDIMENT</option>
                <option>Tomato</option>
                <option>Lettuce</option>
            </select>
            <select className="mixing" name="mixing" value={mixing} onChange={(e) => setMixing(e.target.value)} required >
                <option>SELECT MIXING</option>
                <option>Tomato</option>
                <option>Lettuce</option>
            </select>
            <select className="seasoning" name="seasoning" value={seasoning} onChange={(e) => setSeasoning(e.target.value)} required >
                <option>SELECT SEASONING</option>
                <option>Tomato</option>
                <option>Lettuce</option>
            </select>
            <select className="shell" name="shell" value={shell} onChange={(e) => setShell(e.target.value)} required >
                <option>SELECT SHELL</option>
                <option>Tomato</option>
                <option>Lettuce</option>
            </select>
            <input type="submit" className="submit" />
        </form>
    );
}
 
export default RecipeForm;