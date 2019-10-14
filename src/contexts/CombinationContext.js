import React, { useState, createContext, useEffect } from 'react'

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
    let combinationsArray = JSON.parse(localStorage.getItem('combinationsArray')) || [];
    combinationsArray.push(combination);
    useEffect(() => {
        localStorage.setItem('combinationsArray', JSON.stringify(combinationsArray));
    }, [combination]);
    return (
        <CombinationContext.Provider value={{combination, saveCombination}}>
            { props.children }
        </CombinationContext.Provider>
    );
}
 
export default CombinationContextProvider;