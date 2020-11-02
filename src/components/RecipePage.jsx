/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-template */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

/// //// Tests ==> raccourcir création tableau ///////

// const recipeArray = Object.entries(recipe);

// const k = 'recipe.strIngredient';

// // eslint-disable-next-line prefer-const
// let ingredient = 'test';

// for (let i = 1; i < 20; i += 1) {
//   // eslint-disable-next-line prefer-template
//   // eslint-disable-next-line no-eval
//   eval('let ' + ingredient + ' = ' + k + i + ';');
//   ingredientsArray.push({ ingredient });
// }

/// //////////////////////////////////////////////
function RecipePage({ recipe }) {
  const ingredientsArray = [
    recipe.strIngredient1,
    recipe.strIngredient2,
    recipe.strIngredient3,
    recipe.strIngredient4,
    recipe.strIngredient5,
    recipe.strIngredient6,
    recipe.strIngredient7,
    recipe.strIngredient8,
    recipe.strIngredient9,
    recipe.strIngredient10,
    recipe.strIngredient11,
    recipe.strIngredient12,
    recipe.strIngredient13,
    recipe.strIngredient14,
    recipe.strIngredient15,
    recipe.strIngredient16,
    recipe.strIngredient17,
    recipe.strIngredient18,
    recipe.strIngredient19,
    recipe.strIngredient20,
  ];

  const measuresArray = [
    recipe.strMeasure1,
    recipe.strMeasure2,
    recipe.strMeasure3,
    recipe.strMeasure4,
    recipe.strMeasure5,
    recipe.strMeasure6,
    recipe.strMeasure7,
    recipe.strMeasure8,
    recipe.strMeasure9,
    recipe.strMeasure10,
    recipe.strMeasure11,
    recipe.strMeasure12,
    recipe.strMeasure13,
    recipe.strMeasure14,
    recipe.strMeasure15,
    recipe.strMeasure16,
    recipe.strMeasure17,
    recipe.strMeasure18,
    recipe.strMeasure19,
    recipe.strMeasure20,
  ];

  return (
    <div className="RecipePage">
      <h1>{recipe.strMeal}</h1>
      <div className="Recipe">
        <div className="ImgRecipe">
          <img src={recipe.strMealThumb} alt={`${recipe.strMeal}`} />
        </div>
        <div className="Ingredients">
          <ul>
            {ingredientsArray.map((ingredient, i) => {
              if (ingredient !== null && ingredient !== '') {
                return <li key={i + '-ingredient'}>{ingredient}</li>;
              }
              return false;
            })}
          </ul>
        </div>
        <div className="Measures">
          <ul>
            {measuresArray.map((measure, i) => {
              if (measure !== null && measure !== '') {
                return <li key={i + '-measure'}>{measure}</li>;
              }
              return false;
            })}
          </ul>
        </div>
        <div className="Instructions">
          <p>{recipe.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

RecipePage.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default RecipePage;
