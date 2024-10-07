// App.jsx
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { HamburgerProvider } from './components/header/HamburgerContext';
import ContactForm from './components/contactform/ContactForm'; 
import SkillSection from '../src/components/skillicon/SkillSection';
import About from './components/about/about';

function App() {
  return (
    <HamburgerProvider>
      <Header />
      <About />
      <SkillSection />
      <ContactForm /> 
      
    </HamburgerProvider>
  );
}

export default App;
