import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import RecipePage from './RecipePage';

class RecipeLinked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
    };
    this.getRecipe = this.getRecipe.bind(this);
  }

  getRecipe(id) {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          recipe: data.meals,
        });
      });
  }

  render() {
    const { recipe } = this.state;
    return recipe ? <RecipePage recipe={recipe} /> : this.getRecipe(52722);
  }
}

export default RecipeLinked;
