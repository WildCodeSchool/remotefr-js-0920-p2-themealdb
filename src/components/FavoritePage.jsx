import React from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';
import './FavoritePage.css';

class FavoritePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      favArray: null,
    };
    this.onRemove = this.onRemove.bind(this);
    this.removeAllFav = this.removeAllFav.bind(this);
  }

  componentDidMount() {
    this.getFav();
  }

  onRemove(id) {
    const { favArray } = this.state;
    const newArray = favArray.filter((item) => item.idMeal !== id);
    this.setState({
      favArray: newArray,
    });
  }

  getFav() {
    const { length } = localStorage;
    const { favorites } = this.state;
    for (let i = 0; i < length; i += 1) {
      this.setState({
        favorites: favorites.push(localStorage.key(i)),
      });
    }
    axios
      .all(
        favorites.map((fav) =>
          axios
            .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${fav}`)
            .then((res) => res.data.meals[0]),
        ),
      )
      .then((data) => {
        this.setState({
          favArray: data,
        });
      });
  }

  removeAllFav() {
    localStorage.clear();
    this.setState({
      favArray: [],
    });
  }

  render() {
    const { favArray } = this.state;
    const { onRemove } = this;
    return (
      <div className="FavoritePage">
        <h2>Your favorites below</h2>
        <button type="button" className="btn-fav" onClick={this.removeAllFav}>
          Clear favorites
        </button>

        {favArray ? (
          <ArticleList results={favArray} onRemove={onRemove} />
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}

export default FavoritePage;
