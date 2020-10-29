import React from 'react';
import './App.css';
import Carousel from 'react-elastic-carousel';
import Slider from './components/Slider';
import './components/Slider.css';

function App() {
  return (
    <div className="App">
      <Carousel>
        <Slider img="https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/large/public/Import/pasteque_istock.jpg" />
        <Slider img="https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/large/public/Import/pasteque_istock.jpg" />
        <Slider img="https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/large/public/Import/pasteque_istock.jpg" />
        <Slider img="https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/large/public/Import/pasteque_istock.jpg" />
      </Carousel>
    </div>
  );
}

export default App;
