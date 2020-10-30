import React from 'react';
import './App.css';
import './normalize.css';
import ArticleList from './components/ArticleList';
import Carousel from 'react-elastic-carousel';
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
      <ArticleList />
    </div>
  );
}

export default App;
