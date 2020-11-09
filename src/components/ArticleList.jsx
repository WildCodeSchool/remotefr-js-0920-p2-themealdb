/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Article from './Article';
import './Article.css';

function ArticleList({ results }) {
  return (
    <div className="ArticleList">
      {results.map((item) => (
        <Link to={`recipe/${item.idMeal}`}>
          <Article
            key={item.idMeal}
            strTags={item.strTags || 'NO-TAG'}
            strMealThumb={item.strMealThumb}
            strMeal={item.strMeal}
          />
        </Link>
      ))}
    </div>
  );
}

ArticleList.propTypes = {
  results: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ArticleList;
