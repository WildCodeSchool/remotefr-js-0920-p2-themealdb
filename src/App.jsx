import React from 'react';
import './App.css';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';
import ArticleList from './components/ArticleList';
import RecipePage from './components/RecipePage';
import './normalize.css';
import './components/RecipePage.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
    };
    this.getRecipe = this.getRecipe.bind(this);
  }

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          recipe: data.meals[0],
        });
      });
  }

  render() {
    const { recipe } = this.state;
    console.log('La liste', recipe);
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
        {recipe ? <RecipePage recipe={recipe} /> : <p>Loading...</p>}
        <button type="button" onClick={this.getRecipe}>
          Get random recipe
        </button>
      </div>
    );
  }
}

export default App;
