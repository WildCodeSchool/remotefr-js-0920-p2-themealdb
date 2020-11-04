import React from 'react';
import './App.css';
import Carousel from 'react-elastic-carousel';
import ArticleList from './components/ArticleList';
import RecipePage from './components/RecipePage';
import './normalize.css';
import './components/RecipePage.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ContactForm from './components/ContactForm';
import './components/ContactForm.css';

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
      <RecipePage />
      <ContactForm />
    </div>
  );
}

export default App;
