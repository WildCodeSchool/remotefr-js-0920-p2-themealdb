/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import FlagImg from './FlagImg';
import Loader from '../loader.gif';
import './Mealarea.css';
import ArticleList from './ArticleList';

class Mealarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: [],
      results: [],
      message: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.getAreaName();
  }

  /* GET COUNTRY LIST FROM API */

  getAreaName = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          areas: data.meals,
        });
      });
  };

  /* GET SPECIAL COUNTRY FROM API */

  getListFromNat = (event) => {
    console.log(event);
    const searchUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${event.target.alt}`;
    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((response) => {
        const resultNotFoundMsg = !response.data.meals.length
          ? 'There are no more search results. Please try a new search'
          : '';
        this.setState({
          results: response.data.meals,
          message: resultNotFoundMsg,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: 'Failed to search your meal. Please check network',
          });
        }
      });
    event.preventDefault();
  };

  /* RESULTS */

  renderSearchResults = () => {
    const { results } = this.state;
    if (Object.keys(results).length && results.length) {
      return (
        <div>
          <ArticleList results={results} />
        </div>
      );
    }
    return false;
  };

  /* RENDER */

  render() {
    const { areas, message, loading } = this.state;
    return (
      <div className="MealArea">
        <h2>Search by Area Meal :</h2>

        <ul>
          {areas.map((area) => (
            <li key={area.strArea}>
              <FlagImg
                area={area.strArea}
                // key={'flag' + '{area.strArea}'}
                getListFromNat={this.getListFromNat}
              />
              {area.strArea}
            </li>
          ))}
        </ul>
        {/* Error Message */}
        {message && <p className="Message">{message}</p>}
        {/* Loader GIF */}
        <img
          src={Loader}
          className={`SearchLoading ${loading ? 'show' : 'hide'}`}
          alt="loader"
        />
        {/* Search Result */}
        {this.renderSearchResults()}
      </div>
    );
  }
}

export default Mealarea;
