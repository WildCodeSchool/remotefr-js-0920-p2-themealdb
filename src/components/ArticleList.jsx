/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import './Article.css';

function ArticleList({ recipes }) {
  return (
    <div className="ArticleList">
      {recipes.map((item) => (
        <Article
          key={item.idMeal}
          strTags={item.strTags || 'NO-TAG'}
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
