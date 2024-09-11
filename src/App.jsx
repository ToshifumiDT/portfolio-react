// App.jsx
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { HamburgerProvider } from './components/header/HamburgerContext';
import ContactForm from './components/contactform/ContactForm'; 

function App() {
  return (
    <HamburgerProvider>
      <Header />
      <ContactForm /> 
    </HamburgerProvider>
  );
}

export default App;
