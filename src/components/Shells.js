import React, { useState } from 'react'
import uuid from 'uuid/v1'

const Shells = (props) => {
    let tacos = props.tacos;
    let [background, setBackground] = useState({ clickedItem: '' });
    return (
        <div className='shells'>
        <div className="shells-info" >CHOOSE ONE SHELL</div>
            { Array.isArray(tacos.shells) && tacos.shells.map(item => {
                return  <div className="shell" key={uuid()} id={item.title} >
                            <button onClick={(e) => {
                                props.setShell(e.target.parentElement.id);
                                setBackground({ clickedItem: e.target.parentElement.id });
                            }} style={{backgroundColor: (background.clickedItem === item.title) ? '#0892d0' : 'red' }} >
                                { item.title }
                            </button>
                        </div>
            }) }
        </div>
    );
}
 
export default Shells;