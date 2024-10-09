// App.jsx
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { HamburgerProvider } from './components/header/HamburgerContext';
import ContactForm from './components/contactform/ContactForm'; 
import SkillSection from '../src/components/skillicon/SkillSection';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Introduction from './components/home/introduction';

function App() {
  return (
    <HamburgerProvider>
      <Header />
      <Introduction />
      <About />
      <SkillSection />
      <Projects />
      <div id="Github">
          <a href="https://github.com/ToshifumiDT" target="_blank" rel="noopener noreferrer">
              <img src="./icons8-github-100.png" alt="Githublink" className="github-icon" />
              <p>Check github page.</p>
          </a>
      </div>
      <ContactForm /> 
      
    </HamburgerProvider>
  );
}

export default App;
