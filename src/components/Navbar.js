import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext';

const Navbar = () => {
    const { isEnglish, english, spanish, toggleLanguage } = useContext(LanguageContext);
    const language = isEnglish ? english : spanish;
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>{ language.home }</li>
                    <li>{ language.about }</li>
                    <li>{ language.contact }</li>
                    <button onClick={toggleLanguage}>{ isEnglish ? 'Haz click para Español' : 'Click to view in English' }</button>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;