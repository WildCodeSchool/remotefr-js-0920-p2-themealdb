import React from 'react';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import RecipePage from './components/RecipePage';
import './components/RecipePage.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Slider from './components/Slider';
import ContactForm from './components/ContactForm';
import './components/ContactForm.css';
import './normalize.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
    };
    this.getRecipe = this.getRecipe.bind(this);
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
    const breakPoints = [
      { width: 1, slideShow: 1 },
      { width: 500, slideShow: 2 },
      { width: 768, slideShow: 3 },
      { width: 1200, slideShow: 4 },
    ];
    const { recipe } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Carousel breakPoints={breakPoints}>
              <Slider img="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
              <Slider img="https://daks2k3a4ib2z.cloudfront.net/54f8d2b973ee3d0b0579571c/550af79042dd862c6ca48fa0_food-meat-potatoes-steak-130747-480x320.jpg" />
              <Slider img="https://www.bipbippizza.ch/wp-content/uploads/2016/10/pizza2.jpg" />
              <Slider img="https://media.istockphoto.com/photos/selection-of-american-food-picture-id931308812?k=6&m=931308812&s=612x612&w=0&h=bIbWqdW3LEc9Q5_WnqYG0blqrKp9zW7Qc36Gq35FTaE=" />
              <Slider img="https://media-manager.noticiasaominuto.com/1920/5e3157c6297fa.jpg" />
              <Slider img="https://www.teleculinaria.pt/wp-content/uploads/2018/02/massada-de-peixe-rapida-e1519644831736.jpg" />
              <Slider img="https://thumbs.dreamstime.com/b/chicken-jalfrazy-indian-food-recipe-spices-wooden-table-92742377.jpg" />
              <Slider img="https://www.recettes-asselin.com/img/fondue-chinoise.jpg" />
            </Carousel>
            <SearchBar />
            <ContactForm />
          </Route>
          <Route path="/recipepage">
            {recipe ? <RecipePage recipe={recipe} /> : <p>Loading...</p>}
            <button type="button" onClick={this.getRecipe}>
              Get random recipe
            </button>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
