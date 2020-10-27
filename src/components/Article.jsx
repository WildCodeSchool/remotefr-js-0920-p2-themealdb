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
    const { mealImage, mealName, mealTag } = this.props;
    const { favorite } = this.state;
    return (
      <figure className="Article">
        <img src={mealImage} alt={mealName} />
        <figcaption>
          <h2>{mealName}</h2>
          <blockquote>Tag: {mealTag}</blockquote>
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
        </figcaption>
      </figure>
    );
  }
}

Article.propTypes = {
  mealName: PropTypes.string.isRequired,
  mealImage: PropTypes.string.isRequired,
  mealTag: PropTypes.string.isRequired,
};

export default Article;
