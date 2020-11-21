/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Article.css';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }

  render() {
    const { strMealThumb, strMeal, strTags, id } = this.props;
    const { favorite } = this.state;
    const tags = strTags.split(',');

    return (
      <figure className="Article">
        <img src={strMealThumb} alt={strMeal} />
        <figcaption>
          <Link to={`recipe/${id}`}>
            <h2>{`${strMeal} et ${id}`}</h2>
          </Link>
          <blockquote>
            Tag:
            {tags.map((tag) => {
              return (
                <button key={tag} type="button">
                  {tag}
                </button>
              );
            })}
          </blockquote>
        </figcaption>
        <p>
          <button
            type="button"
            className={favorite ? 'is-favorite' : ''}
            onClick={() => {
              const newFavorite = !favorite;
              this.setState({ favorite: newFavorite });
              localStorage.setItem('favorites', id);
            }}
          >
            &#9733;
          </button>
        </p>
      </figure>
    );
  }
}

Article.propTypes = {
  strMeal: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  strTags: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Article;
