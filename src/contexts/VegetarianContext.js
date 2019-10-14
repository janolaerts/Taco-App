import React, { Component, createContext } from 'react'

export const VegetarianContext = createContext();

class VegetarianContextProvider extends Component {
    state = {
        isVegetarian: true,
    }
    toggleVegetarian = () => {
        this.setState({ isVegetarian: !this.state.isVegetarian });
    }
    render() { 
        return (
            <VegetarianContext.Provider value={{...this.state, toggleVegetarian: this.toggleVegetarian}} >
                { this.props.children }
            </VegetarianContext.Provider>
        );
    }
}
 
export default VegetarianContextProvider;