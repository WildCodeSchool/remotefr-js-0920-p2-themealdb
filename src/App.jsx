import React from 'react';
import './App.css';
import './normalize.css';
import Carousel from 'react-elastic-carousel';
import Slider from './components/Slider';
import './components/Slider.css';

function App() {
  return (
    <div className="App">
      <Carousel>
        <Slider number="1" />
        <Slider number="2" />
        <Slider number="3" />
        <Slider number="4" />
      </Carousel>
    </div>
  );
}

export default App;
