import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }

  render() {
    const { strMealThumb, strMeal, strTags } = this.props;
    const { favorite } = this.state;
    const tags = strTags.split(',');

    return (
      <figure className="Article">
        <img src={strMealThumb} alt={strMeal} />
        <figcaption>
          <h2>{strMeal}</h2>
          <blockquote>
            Tag:
            {tags.map((tag) => {
              return <button type="button">{tag}</button>;
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
};

export default Article;
