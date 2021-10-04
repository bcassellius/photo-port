import React from 'react';
import './App.css';
import About from './components/About/index.js';
import Nav from './components/Nav/index.js';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
