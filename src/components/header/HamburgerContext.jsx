import React, { createContext, useState, useContext } from 'react';


const HamburgerContext = createContext();


export function HamburgerProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <HamburgerContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </HamburgerContext.Provider>
  );
}


export function useHamburger() {
  return useContext(HamburgerContext);
}
