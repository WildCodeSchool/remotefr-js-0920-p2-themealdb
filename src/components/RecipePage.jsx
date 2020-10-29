/* eslint-disable array-callback-return */
/* eslint-disable prefer-template */
/* eslint-disable no-undef */
import React from 'react';

const recipe = {
  idMeal: '52772',
  strMeal: 'Teriyaki Chicken Casserole',
  strDrinkAlternate: null,
  strCategory: 'Chicken',
  strArea: 'Japanese',
  strInstructions:
    'Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!',
  strMealThumb:
    'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
  strTags: 'Meat,Casserole',
  strYoutube: 'https://www.youtube.com/watch?v=4aZr5hZXP_s',
  strIngredient1: 'soy sauce',
  strIngredient2: 'water',
  strIngredient3: 'brown sugar',
  strIngredient4: 'ground ginger',
  strIngredient5: 'minced garlic',
  strIngredient6: 'cornstarch',
  strIngredient7: 'chicken breasts',
  strIngredient8: 'stir-fry vegetables',
  strIngredient9: 'brown rice',
  strIngredient10: '',
  strIngredient11: '',
  strIngredient12: '',
  strIngredient13: '',
  strIngredient14: '',
  strIngredient15: '',
  strIngredient16: null,
  strIngredient17: null,
  strIngredient18: null,
  strIngredient19: null,
  strIngredient20: null,
  strMeasure1: '3/4 cup',
  strMeasure2: '1/2 cup',
  strMeasure3: '1/4 cup',
  strMeasure4: '1/2 teaspoon',
  strMeasure5: '1/2 teaspoon',
  strMeasure6: '4 Tablespoons',
  strMeasure7: '2',
  strMeasure8: '1 (12 oz.)',
  strMeasure9: '3 cups',
  strMeasure10: '',
  strMeasure11: '',
  strMeasure12: '',
  strMeasure13: '',
  strMeasure14: '',
  strMeasure15: '',
  strMeasure16: null,
  strMeasure17: null,
  strMeasure18: null,
  strMeasure19: null,
  strMeasure20: null,
  strSource: null,
  dateModified: null,
};

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

// eslint-disable-next-line no-console
console.log(ingredientsArray);

/// //////////////////////////////////////////////

function RecipePage() {
  return (
    <div className="RecipePage">
      <h1>{recipe.strMeal}</h1>
      <div className="Recipe">
        <div className="ImgRecipe">
          <img src={recipe.strMealThumb} alt={`${recipe.strMeal}`} />
        </div>
        <div className="Ingredients">
          <ul>
            {ingredientsArray.map((ingredient) => {
              if (ingredient !== null && ingredient !== '') {
                return <li key={ingredient}>{ingredient}</li>;
              }
              return false;
            })}
          </ul>
        </div>
        <div className="Measures">
          <ul>
            {measuresArray.map((measure) => {
              if (measure !== null && measure !== '') {
                return <li key={measure}>{measure}</li>;
              }
              return false;
            })}
          </ul>
        </div>
        <div className="Instructions">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit
            spernatur aut odit aut fugit, sed quia consequuntur magni dolores os
            qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, i
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, d
            quia non numquam eius modi tempora incidunt ut labore et dolore gnam
            aliquam quaerat voluptatem.Ut enim ad minima veniam, quis trum
            exercitationem ullam corporis suscipit laboriosam, nisi ut quid ex
            ea commodi consequatur?Quis autem vel eum iure ehenderit qui in ea
            voluptate velit esse quam nihil molestiae equatur, vel illum qui
            dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
