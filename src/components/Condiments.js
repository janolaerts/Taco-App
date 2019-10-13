import React, { useState } from 'react'
import uuid from 'uuid/v1'

const Condiments = (props) => {
    let tacos = props.tacos;
    let [background, setBackground] = useState({ clickedItem: '' });
    return (
        <div className='condiments'>
        <div className="condiments-info" >CHOOSE ONE CONDIMENT</div>
            { Array.isArray(tacos.condiments) && tacos.condiments.map(item => {
                return  <div className="condiment" key={uuid()} id={item.title} >
                            <button onClick={(e) => {
                                props.setCondiment(e.target.parentElement.id);
                                setBackground({ clickedItem: e.target.parentElement.id });
                            }} style={{backgroundColor: background.clickedItem === item.title ? 'darkblue' : 'red' }} >
                                { item.title }
                                
                                </button>
                        </div>
            }) }
        </div>
    );
}
 
export default Condiments;