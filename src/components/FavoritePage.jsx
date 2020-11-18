/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
// import ArticleList from './ArticleList';

class FavoritePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: ['52772', '52773'],
      // favArray: null,
    };
  }

  componentDidMount() {
    console.log(this.state.favorites);
    axios
      .all(
        this.state.favorites.map((fav) =>
          axios
            .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${fav}`)
            .then((res) => res.data),
        ),
      )
      .then((data) => {
        return console.log(data);
      });
  }

  render() {
    // const { favArray } = this.state;

    return (
      <div>
        <p>This is a favorites page</p>
        {/* <ArticleList fav={favArray} /> */}
      </div>
    );
  }
}

export default FavoritePage;
