/* eslint-disable react/jsx-props-no-spreading */

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
      recipe: {
        idMeal: '52787',
        strMeal: 'Hot Chocolate Fudge',
        strDrinkAlternate: null,
        strCategory: 'Dessert',
        strArea: 'American',
        strInstructions:
          'Line an 8-inch-square baking pan with wax paper or foil, and coat with non-stick spray.\r\nIn a microwave-safe bowl, combine the dark chocolate chips, heavy cream and half of the sweetened condensed milk. Microwave the dark chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nAdd the vanilla extract to the dark chocolate mixture and stir well until smooth.\r\nTransfer the dark chocolate mixture into the prepared pan and spread into an even layer.\r\nIn a separate bowl, combine the white chocolate chips with the remaining half of the sweetened condensed milk. Microwave the white chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nEvenly spread the white chocolate mixture on top of dark chocolate layer.\r\nTop the chocolate layers with the Mallow Bits or miniature marshmallows, and gently press them down.\r\nRefrigerate for 4 hours, or until set.\r\nRemove the fudge and wax paper from the pan. Carefully peel all of the wax paper from the fudge.\r\nCut the fudge into bite-sized pieces and serve.',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg',
        strTags: 'Snack,Chocolate',
        strYoutube: 'https://www.youtube.com/watch?v=oJvbsVSblfk',
        strIngredient1: 'Chocolate Chips',
        strIngredient2: 'Heavy Cream',
        strIngredient3: 'Condensed Milk',
        strIngredient4: 'Vanilla Extract',
        strIngredient5: 'White Chocolate Chips',
        strIngredient6: 'Miniature Marshmallows',
        strIngredient7: '',
        strIngredient8: '',
        strIngredient9: '',
        strIngredient10: '',
        strIngredient11: '',
        strIngredient12: '',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: '',
        strIngredient16: '',
        strIngredient17: '',
        strIngredient18: '',
        strIngredient19: '',
        strIngredient20: '',
        strMeasure1: '2 cups',
        strMeasure2: '2 tbs',
        strMeasure3: '1 – 14-ounce can',
        strMeasure4: '1 tsp',
        strMeasure5: '1-⅓ cups',
        strMeasure6: '1-½ cups',
        strMeasure7: '',
        strMeasure8: '',
        strMeasure9: '',
        strMeasure10: '',
        strMeasure11: '',
        strMeasure12: '',
        strMeasure13: '',
        strMeasure14: '',
        strMeasure15: '',
        strMeasure16: '',
        strMeasure17: '',
        strMeasure18: '',
        strMeasure19: '',
        strMeasure20: '',
        strSource: '',
        dateModified: null,
      },
    };
    this.getRecipe = this.getRecipe.bind(this);
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
        </Switch>
      </div>
    );
  }
}

export default App;
