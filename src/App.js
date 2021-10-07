import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ContactForm from './components/Contact';

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
  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
