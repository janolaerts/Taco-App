import React from 'react'
import uuid from 'uuid/v1'

const BaseLayerTags = (props) => {
    let item = props.item;
    return (
        <div className="base-layer-tags-container">
            { item.tags.map(item => {
                return   <h6 className="base-layer-tags" key={uuid()}>{ item }</h6>
            }) }
        </div>
    );
}
 
export default BaseLayerTags;