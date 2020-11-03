/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import './Article.css';

// An array of objects
// const meal = [
//   {
//     strTags: 'DINNER PARTY, DESERT, PUDDING, CHOCOLATE',
//     strMeal: 'Chocolate Souffle',
//     strMealThumb:
//       'https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg',
//   },
//   {
//     strTags: 'NO-TAG',
//     strMeal: 'Tunisian Orange Cake',
//     strMealThumb:
//       'https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg',
//   },
//   {
//     strTags: 'PASTA',
//     strMeal: 'Rigatoni with fennel sausage sauce',
//     strMealThumb:
//       'https://www.themealdb.com/images/media/meals/qtqvys1468573168.jpg',
//   },
// ];

// const ArticleList = () => (
//   <div className="ArticleList">
//     {meal.map((item) => (
//       <Article
//         key={item.strTags}
//         strTags={item.strTags}
//         strMealThumb={item.strMealThumb}
//         strMeal={item.strMeal}
//       />
//     ))}
//   </div>
// );

function ArticleList({ recipes }) {
  return (
    <div className="ArticleList">
      {Object.keys(recipes).map((item) => (
        <Article
          key={item.strTags}
          strTags={item.strTags}
          strMealThumb={item.strMealThumb}
          strMeal={item.strMeal}
        />
      ))}
    </div>
  );
}

ArticleList.propTypes = {
  recipes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ArticleList;
