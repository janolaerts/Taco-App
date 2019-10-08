import React, { Component, createContext } from 'react'

export const LanguageContext = createContext();

class LanguageContextProvider extends Component {
    state = {
        isEnglish: true,
        english: { home: 'Home', about: 'About', contact: 'Contact' },
        spanish: { home: 'Página Principal', about: 'Sobre Nosotros', contact: 'Contacto' }
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