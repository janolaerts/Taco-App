import React, { useState, createContext } from 'react'

export const CombinationContext = createContext();

const CombinationContextProvider = (props) => {
    let [combination, setCombination] = useState({
        baseLayer: '',
        condiment: '',
        mixing: '',
        seasoning: '',
        shell: ''
    });
    const saveCombination = (baseLayer, condiment, mixing, seasoning, shell) => {
        setCombination(combination = { baseLayer: baseLayer, condiment: condiment, mixing: mixing, seasoning: seasoning, shell: shell });
        console.log(combination);
    }
    return (
        <CombinationContext.Provider value={{combination, saveCombination}}>
            { props.children }
        </CombinationContext.Provider>
    );
}
 
export default CombinationContextProvider;