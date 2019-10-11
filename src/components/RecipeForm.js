import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1'

const RecipeForm = (props) => {
    const [baseLayer, setBaseLayer] = useState('');
    const [condiment, setCondiment] = useState('');
    const [mixing, setMixing] = useState('');
    const [seasoning, setSeasoning] = useState('');
    const [shell, setShell] = useState('');
    let [tacos, setTacos] = useState('');

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
            <select className="base-layer" name="baseLayer" value={baseLayer} onChange={(e) => setBaseLayer(e.target.value)} required >
                <option>SELECT BASE LAYER</option>
                { Array.isArray(tacos.base_layers) && tacos.base_layers.map(item => {
                    return <option key={uuid()}>{ item.title }</option>
                }) }
            </select>
            <select className="condiment" name="condiment" value={condiment} onChange={(e) => setCondiment(e.target.value)} required >
                <option>SELECT CONDIMENT</option>
                { Array.isArray(tacos.condiments) && tacos.condiments.map(item => {
                    return <option key={uuid()}>{ item.title }</option>
                }) }
            </select>
            <select className="mixing" name="mixing" value={mixing} onChange={(e) => setMixing(e.target.value)} required >
                <option>SELECT MIXING</option>
                { Array.isArray(tacos.mixins) && tacos.mixins.map(item => {
                    return <option key={uuid()}>{ item.title }</option>
                }) }
            </select>
            <select className="seasoning" name="seasoning" value={seasoning} onChange={(e) => setSeasoning(e.target.value)} required >
                <option>SELECT SEASONING</option>
                { Array.isArray(tacos.seasonings) && tacos.seasonings.map(item => {
                    return <option key={uuid()}>{ item.title }</option>
                }) }
            </select>
            <select className="shell" name="shell" value={shell} onChange={(e) => setShell(e.target.value)} required >
                <option>SELECT SHELL</option>
                { Array.isArray(tacos.shells) && tacos.shells.map(item => {
                    return <option key={uuid()}>{ item.title }</option>
                }) }
            </select>
            <input type="submit" className="submit" />
        </form>
    );
}
 
export default RecipeForm;