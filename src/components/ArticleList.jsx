import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import './Article.css';

function ArticleList({ results, onRemove }) {
  return (
    <div className="ArticleList">
      {results.map((item) => (
        <Article
          key={item.idMeal}
          id={item.idMeal}
          strTags={item.strTags || 'NO-TAG'}
          strMealThumb={item.strMealThumb}
          strMeal={item.strMeal}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

ArticleList.propTypes = {
  results: Array.isArray,
  onRemove: PropTypes.func,
};

ArticleList.defaultProps = {
  results: [],
  onRemove: () => {},
};

export default ArticleList;
