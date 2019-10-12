import React from 'react'
import uuid from 'uuid/v1'

const Seasonings = (props) => {
    let tacos = props.tacos;
    return (
        <div className='seasonings'>
        <div className="seasonings-info" >CHOOSE ONE SEASONING</div>
            { Array.isArray(tacos.seasonings) && tacos.seasonings.map(item => {
                return  <div className="seasoning" key={uuid()} id={item.title} >
                            <button onClick={(e) => props.setSeasoning(e.target.parentElement.id)}>{ item.title }</button>
                        </div>
            }) }
        </div>
    );
}
 
export default Seasonings;