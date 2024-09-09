// App.jsx
import React from 'react';
import './App.css'
import Header from './components/header/Header';
import { HamburgerProvider } from './components/header/HamburgerContext';


function App() {
  return (
    <HamburgerProvider>
      <Header />
      {/* その他のコンテンツ */}
    </HamburgerProvider>
  );
}

export default App;