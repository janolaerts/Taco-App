import React, { useState, useContext } from 'react'
import uuid from 'uuid/v1'
import { NavContext } from '../contexts/NavContext';
import BaseLayerIngredients from './BaseLayerIngredients';
import BaseLayerTags from './BaseLayerTags';

const BaseLayers = (props) => {
    let tacos = props.tacos;
    const [background, setBackground] = useState({ clickedItem: '' });
    let { toggleNav } = useContext(NavContext);
    return (
        <div className='base-layers'>
        <img className="menu" src={require("../img/tacomenu.png")} onClick={toggleNav} />
        <div className="base-layers-info" >START BY CHOOSING A BASE LAYER</div>
          { Array.isArray(tacos.base_layers) && tacos.base_layers.map(item => {
            return <div className="base-layer" key={uuid()} id={item.title} style={{ backgroundColor: (background.clickedItem === item.title) ? '#0892d0' : 'red' }} >
                <h4 className="base-layer-title">{ item.title }</h4>
                <img src={require('../img/taco-cards.jpg')} alt="tacomenu" />
                <BaseLayerIngredients item={item} /> 
                <button className="base-layer-button" onClick={(e) => {
                    props.setBaseLayer(e.target.parentElement.id);
                    setBackground({ clickedItem: e.target.parentElement.id });
                }} >
                    Choose this base layer
                </button>
                <BaseLayerTags item={item} />
            </div>
            })}
     
        </div>
    );
}
 
export default BaseLayers;