import React from 'react';
import './App.css';
import Carousel from 'react-elastic-carousel';
import Slider from './components/Slider';
import './components/Slider.css';

function App() {
  return (
    <div className="App">
      <Carousel>
        <Slider img="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
        <Slider img="https://daks2k3a4ib2z.cloudfront.net/54f8d2b973ee3d0b0579571c/550af79042dd862c6ca48fa0_food-meat-potatoes-steak-130747-480x320.jpg" />
        <Slider img="https://www.bipbippizza.ch/wp-content/uploads/2016/10/pizza2.jpg" />
        <Slider img="https://media.istockphoto.com/photos/selection-of-american-food-picture-id931308812?k=6&m=931308812&s=612x612&w=0&h=bIbWqdW3LEc9Q5_WnqYG0blqrKp9zW7Qc36Gq35FTaE=" />
      </Carousel>
    </div>
  );
}

export default App;
