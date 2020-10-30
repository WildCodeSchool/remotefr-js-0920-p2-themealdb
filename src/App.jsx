import React from 'react';
import './App.css';
import Carousel from 'react-elastic-carousel';
import RecipePage from './components/RecipePage';
import './normalize.css';
import './components/RecipePage.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel>
        <Slider img="https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/large/public/Import/pasteque_istock.jpg" />
        <Slider img="https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/large/public/Import/pasteque_istock.jpg" />
        <Slider img="https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/large/public/Import/pasteque_istock.jpg" />
        <Slider img="https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/large/public/Import/pasteque_istock.jpg" />
      </Carousel>
      <RecipePage />
    </div>
  );
}

export default App;
