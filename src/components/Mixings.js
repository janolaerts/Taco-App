import React, { useState } from 'react'
import uuid from 'uuid/v1'

const Mixings = (props) => {
    let tacos = props.tacos;
    let [background, setBackground] = useState({ clickeditem: '' });
    return (
        <div className='mixings'>
        <div className="mixings-info" >CHOOSE ONE MIXING</div>
            { Array.isArray(tacos.mixins) && tacos.mixins.map(item => {
                return  <div className="mixing" key={uuid()} id={item.title} >
                            <button onClick={(e) => {
                                props.setMixing(e.target.parentElement.id);
                                setBackground({ clickedItem: e.target.parentElement.id });
                            }} style={{backgroundColor: (background.clickedItem === item.title) ? '#0892d0' : 'red' }} >
                                { item.title }
                            </button>
                        </div>
            }) }
        </div>
    );
}
 
export default Mixings;