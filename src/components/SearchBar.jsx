/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
import React from 'react';
import axios from 'axios';
import Loader from '../loader.gif';
import ArticleList from './ArticleList';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: {},
      loading: false,
      message: '',
      activeSearch: 'search.php?s=',
      searchStatus: true,
    };
    this.getRandomRecipeList = this.getRandomRecipeList.bind(this);
    this.cancel = '';
  }

  componentDidMount() {
    this.getRandomRecipeList();
  }

  getRandomRecipeList() {
    const one = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const two = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const three = 'https://www.themealdb.com/api/json/v1/1/random.php';

    axios
      .all([
        axios.get(one).then((response) => response.data),
        axios.get(two).then((response) => response.data),
        axios.get(three).then((response) => response.data),
      ])
      .then(
        axios.spread((...data) => {
          this.setState({
            results: [data[0].meals[0], data[1].meals[0], data[2].meals[0]],
          });
        }),
      );
  }

  /* MESSAGE SEARCHBAR */

  handleSubmit = (event) => {
    const { query, activeSearch } = this.state;
    const searchUrl = `https://www.themealdb.com/api/json/v1/1/${activeSearch}${query}`;
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

  changeFilter = () => {
    const { activeSearch, searchStatus } = this.state;
    alert(`${activeSearch} ${searchStatus}`);
    if (searchStatus) {
      this.setState({
        activeSearch: 'filter.php?i=',
        searchStatus: !searchStatus,
      });
    } else {
      this.setState({
        activeSearch: 'search.php?s=',
        searchStatus: !searchStatus,
      });
    }
  };

  /* BUTTON SEARCHBAR */

  handleChange = (event) => {
    const inputField = event.target;
    const newValue = inputField.value;
    this.setState({
      query: newValue,
    });
  };

  /* RESULTS SEARCHBAR */

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

  render() {
    const { query, loading, message } = this.state;

    return (
      <div className="SearchBar">
        {/* Search Input */}
        <form onSubmit={this.handleSubmit}>
          <label className="SearchLabel" htmlFor="search-input">
            <input
              type="text"
              name="query"
              value={query}
              id="search-input"
              placeholder="Search Meal..."
              onChange={this.handleChange}
            />
            <button onClick={this.changeFilter} type="button">
              test
            </button>
            <button type="submit" className="SearchIcon">
              <i className="fas fa-search" />
            </button>
          </label>
        </form>
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

export default SearchBar;
