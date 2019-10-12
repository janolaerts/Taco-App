import React from 'react'
import uuid from 'uuid/v1'

const Condiments = (props) => {
    let tacos = props.tacos;
    return (
        <div className='condiments'>
            { Array.isArray(tacos.condiments) && tacos.condiments.map(item => {
                return  <div className="condiment" key={uuid()} id={item.title} >
                            <button>{ item.title }</button>
                        </div>
            }) }
        </div>
    );
}
 
export default Condiments;