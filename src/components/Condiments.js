import React from 'react'
import uuid from 'uuid/v1'

const Condiments = (props) => {
    let tacos = props.tacos;
    return (
        <div className='condiments'>
        <div className="condiments-info" >CHOOSE ONE CONDIMENT</div>
            { Array.isArray(tacos.condiments) && tacos.condiments.map(item => {
                return  <div className="condiment" key={uuid()} id={item.title} >
                            <button onClick={(e) => props.setCondiment(e.target.parentElement.id)}>{ item.title }</button>
                        </div>
            }) }
        </div>
    );
}
 
export default Condiments;