import React from 'react'
import uuid from 'uuid/v1'

const Shells = (props) => {
    let tacos = props.tacos;
    return (
        <div className='shells'>
        <div className="shells-info" >CHOOSE ONE SHELL</div>
            { Array.isArray(tacos.shells) && tacos.shells.map(item => {
                return  <div className="shell" key={uuid()} id={item.title} >
                            <button onClick={(e) => props.setShell(e.target.parentElement.id)}>{ item.title }</button>
                        </div>
            }) }
        </div>
    );
}
 
export default Shells;