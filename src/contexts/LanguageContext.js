import React, { Component, createContext } from 'react'

export const LanguageContext = createContext();

class LanguageContextProvider extends Component {
    state = {
        isEnglish: true,
        english: {nav1: 'Order', nav2: 'Checkout', nav3: 'Contact' },
        spanish: {nav1: 'Pedir', nav2: 'Pagar', nav3: 'Contacto' }
    }
    toggleLanguage = () => {
        this.setState({ isEnglish: !this.state.isEnglish });
    }
    render() { 
        return (
            <LanguageContext.Provider value={{...this.state, toggleLanguage: this.toggleLanguage}} >
                { this.props.children }
            </LanguageContext.Provider>
        );
    }
}
 
export default LanguageContextProvider;