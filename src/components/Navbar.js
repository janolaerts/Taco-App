import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

const Navbar = () => {
    const { isEnglish, english, spanish, toggleLanguage } = useContext(LanguageContext);
    const language = isEnglish ? english : spanish;
    return (
        <div className="navbar">
            <nav>
                <ul className="content">
                    <li><a href="/">{ language.nav1 }</a></li>
                    <li><a href="/about">{ language.nav2 }</a></li>
                    <li className="four"><a onClick={toggleLanguage}>{ isEnglish ? 'ES' : 'EN' }</a></li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;