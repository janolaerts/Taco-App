import React, { useState } from 'react'
import uuid from 'uuid/v1'

const Seasonings = (props) => {
    let tacos = props.tacos;
    let [background, setBackground] = useState({ clickedItem: '' });
    return (
        <div className='seasonings'>
        <div className="seasonings-info" >CHOOSE ONE SEASONING</div>
            { Array.isArray(tacos.seasonings) && tacos.seasonings.map(item => {
                return  <div className="seasoning" key={uuid()} id={item.title} >
                            <button onClick={(e) => {
                                props.setSeasoning(e.target.parentElement.id);
                                setBackground({ clickedItem: e.target.parentElement.id });
                            }} style={{backgroundColor: (background.clickedItem === item.title) ? '#0892d0' : 'red' }} >
                                { item.title }
                            </button>
                        </div>
            }) }
        </div>
    );
}
 
export default Seasonings;