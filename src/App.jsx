import React from 'react';
import './App.css';
import Carousel from 'react-elastic-carousel';
import Slider from './components/Slider';
import './components/Slider.css';

function App() {
  return (
    <div className="App">
      <Carousel>
        <Slider img="1" />
        <Slider img="2" />
        <Slider img="3" />
        <Slider img="4" />
      </Carousel>
    </div>
  );
}

export default App;
