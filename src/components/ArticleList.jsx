import React from 'react';
import Article from './Article';

// An array of objects
const meal = [
  {
    mealTag: 'DINNER PARTY, DESERT, PUDDING, CHOCOLATE',
    mealName: 'Chocolate Souffle',
    mealImage:
      'https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg',
  },
  {
    mealTag: 'NO-TAG',
    mealName: 'Tunisian Orange Cake',
    mealImage:
      'https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg',
  },
  {
    mealTag: 'PASTA',
    mealName: 'Rigatoni with fennel sausage sauce',
    mealImage:
      'https://www.themealdb.com/images/media/meals/qtqvys1468573168.jpg',
  },
];

const ArticleList = () => (
  <div>
    {meal.map((item) => (
      <Article
        key={item.mealTag}
        mealTag={item.mealTag}
        mealImage={item.mealImage}
        mealName={item.mealName}
      />
    ))}
  </div>
);

export default ArticleList;
