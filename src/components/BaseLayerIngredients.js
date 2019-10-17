import React from 'react'
import uuid from 'uuid/v1'

const BaseLayerIngredients = (props) => {
    let item = props.item;
    return (
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
    );
}
 
export default BaseLayerIngredients;