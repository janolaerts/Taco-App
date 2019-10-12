import React, { useState } from 'react'
import uuid from 'uuid/v1'

const BaseLayers = (props) => {
    let tacos = props.tacos;
    const [background, setBackground] = useState({ isSelected: false, item: '' });
    return (
        <div className='base-layers'>
        <div className="base-layers-info" >START BY CHOOSING A BASE LAYER</div>
            { Array.isArray(tacos.base_layers) && tacos.base_layers.map(item => {
                return  <div className="base-layer" key={uuid()} id={item.title} style={{ backgroundColor: background.isSelected ? 'blue' : 'red' }} >
                            <h4 className="base-layer-title">{ item.title }</h4>
                            <img src={require('../img/taco-cards.jpg')} alt="taco" />
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
                                setBackground({ isSelected: !background.isSelected, item: e.target.parentElement.id });
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