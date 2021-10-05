import React, { useState } from 'react';
import './App.css';
import About from './components/About/index.js';
import Nav from './components/Nav/index.js';
import Gallery from './components/Gallery'

function App() {
  const [categories] = useState([
    {
      item: "commercial",
      description: "Photos of grocery stores, food trucks, and other commercial projects"
    },
    {
      item: "portraits",
      description: "Portraits of people in my life"
    },
    {
      item: "food",
      description: "Delicious delicacies"
    },
    {
      item: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature"
    }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
    
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
