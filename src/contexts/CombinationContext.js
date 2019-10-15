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
    }
    let combinationsArray = JSON.parse(localStorage.getItem('combinationsArray')) || [];

    const limitArray = () => {
        if(combination.baseLayer === '' && combination.condiment === '' && combination.mixing === '' && combination.seasoning === '' && combination.shell === ''){
            return
        }
        else {
            combinationsArray.push(combination);
        }
    }
    limitArray();

    useEffect(() => {
        localStorage.setItem('combinationsArray', JSON.stringify(combinationsArray));
    }, [combinationsArray]);
    return (
        <CombinationContext.Provider value={{combination, saveCombination}}>
            { props.children }
        </CombinationContext.Provider>
    );
}
 
export default CombinationContextProvider;