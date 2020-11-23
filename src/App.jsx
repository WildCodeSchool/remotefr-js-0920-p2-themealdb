/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import RecipePage from './components/RecipePage';
import Navbar from './components/Navbar';
import WhoAreWe from './components/WhoAreWe';
import SearchBar from './components/SearchBar';
import Mealarea from './components/Mealarea';
import Slider from './components/Slider';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './normalize.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
      img: [],
    };
    this.getRecipe = this.getRecipe.bind(this);
  }

  componentDidMount() {
    const one = 'https://www.themealdb.com/api/json/v1/1/random.php';
    axios
      .all([
        axios.get(one).then((response) => response.data),
        axios.get(one).then((response) => response.data),
        axios.get(one).then((response) => response.data),
        axios.get(one).then((response) => response.data),
        axios.get(one).then((response) => response.data),
        axios.get(one).then((response) => response.data),
        axios.get(one).then((response) => response.data),
        axios.get(one).then((response) => response.data),
        axios.get(one).then((response) => response.data),
        axios.get(one).then((response) => response.data),
        axios.get(one).then((response) => response.data),
      ])
      .then((data) => {
        const imgData = data.map((item) => item.meals[0]);
        this.setState({
          img: imgData,
        });
      });
  }

  getRecipe(id) {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          recipe: data.meals[0],
        });
      });
  }

  render() {
    const breakPoints = [
      { width: 1, itemsToScroll: 1, itemsToShow: 1 },
      { width: 500, itemsToScroll: 2, itemsToShow: 1 },
      { width: 768, itemsToScroll: 3, itemsToShow: 3 },
      { width: 1200, itemsToScroll: 4, itemsToShow: 3 },
    ];
    const { recipe } = this.state;
    const { img } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Carousel breakPoints={breakPoints}>
              {img.map((picture) => (
                <Link to={`recipe/${picture.idMeal}`}>
                  <Slider key={picture} img={picture.strMealThumb} />
                </Link>
              ))}
            </Carousel>
              <SearchBar />
            </Route>
            <Route path="/contact-form">
              <ContactForm />
            </Route>
            <Route path="/who-are-we">
              <WhoAreWe />
            </Route>
            <Route
              path="/recipe/:recipeLink"
              render={(props) => (
                <RecipePage
                  link={props.match.params.recipeLink}
                  recipe={recipe}
                  getRecipe={this.getRecipe}
                />
              )}
            />
            <Route path="/meal-area">
              <Mealarea />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
