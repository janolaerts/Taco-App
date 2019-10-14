import React, { createContext, useState } from 'react'

export const NavContext = createContext();

const NavContextProvider = (props) => {
    const [showNav, setShowNav] = useState(false);
    const toggleNav = () => {
        setShowNav(!showNav);
    }
    return (
        <NavContext.Provider value={{showNav, toggleNav}} >
            { props.children }
        </NavContext.Provider>
    );
}
 
export default NavContextProvider;