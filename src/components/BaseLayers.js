import React, { useState, useContext } from 'react'
import uuid from 'uuid/v1'
import { NavContext } from '../contexts/NavContext';

const BaseLayers = (props) => {
    let tacos = props.tacos;
    const [background, setBackground] = useState({ clickedItem: '' });
    let { toggleNav } = useContext(NavContext);
    return (
        <div className='base-layers'>
        <img className="menu" src={require("../img/tacomenu.png")} onClick={toggleNav} />
        <div className="base-layers-info" >START BY CHOOSING A BASE LAYER</div>
            { Array.isArray(tacos.base_layers) && tacos.base_layers.map(item => {
                return  <div className="base-layer" key={uuid()} id={item.title} style={{ backgroundColor: (background.clickedItem === item.title) ? '#0892d0' : 'red' }} >
                            <h4 className="base-layer-title">{ item.title }</h4>
                            <img src={require('../img/taco-cards.jpg')} alt="tacomenu" />
                            <div className="base-layer-ingredients-container">
                            { item.ingredients.map(item => {
                                if(typeof item === 'string'){
                                    return   <h6 className="base-layer-ingredients" key={uuid()}>{ item }</h6>
                                }
                                if(typeof item === 'object'){
                                    return  <h6 className="base-layer-ingredients" key={uuid()}>{ item.title }</h6>
                                    return  <h6 className="base-layer-ingredients" key={uuid()}>{ item.ingredients }</h6>
                                }
                            }) }
                            </div>
                            <button className="base-layer-button" onClick={(e) => {
                                props.setBaseLayer(e.target.parentElement.id);
                                setBackground({ clickedItem: e.target.parentElement.id });
                            }} >
                                Choose this base layer
                            </button>
                            <div className="base-layer-tags-container">
                            { item.tags.map(item => {
                                return   <h6 className="base-layer-tags" key={uuid()}>{ item }</h6>
                            }) }
                            </div>
                        </div>
            }) }
        </div>
    );
}
 
export default BaseLayers;