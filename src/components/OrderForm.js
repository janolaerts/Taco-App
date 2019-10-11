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
                    console.log(data);
                })
        }
        fetchData();

    }, [])
    return (
        <form onSubmit={submitHandler} >
            <div className='base-layers'>
                { Array.isArray(tacos.base_layers) && tacos.base_layers.map(item => {
                    return  <div className="base-layer" key={uuid()} onClick={(e) => setBaseLayer(e.target.value)}>
                                <h4 className="base-layer-title">{ item.title }</h4>
                                <img src={require('../img/taco-cards.jpg')} alt="taco" />
                                { Array.isArray(tacos.base_layers) && tacos.base_layers.forEach(item => item.ingredients.map(item => {
                                    return <h6 className="base-layer-ingredients" key={uuid()}>{ item }</h6>
                                })) }
                                <h6 className="base-layer-tags">{ item.tags }</h6>
                            </div>
                }) }
            </div>
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