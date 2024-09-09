// App.jsx
import React from 'react';
import './App.css'
import Header from './Header';
import { HamburgerProvider } from './HamburgerContext';

function App() {
  return (
    <HamburgerProvider>
      <Header />
      {/* その他のコンテンツ */}
    </HamburgerProvider>
  );
}

export default App;