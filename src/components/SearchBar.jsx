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
    };
    this.getRandomRecipeList = this.getRandomRecipeList.bind(this);
    this.cancel = '';
  }

  componentDidMount() {
    this.getRandomRecipeList();
  }

  getRandomRecipeList() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          results: data.meals,
        });
      });
  }

  fetchSearchResults = (query) => {
    const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
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
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({ query, results: {}, message: '' });
    } else {
      this.setState(
        {
          query,
          loading: true,
          message: '',
        },
        () => {
          this.fetchSearchResults(query);
        },
      );
    }
  };

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
        <label className="SearchLabel" htmlFor="search-input">
          <input
            type="text"
            name="query"
            value={query}
            id="search-input"
            placeholder="Search Meal..."
            onChange={this.handleOnInputChange}
          />
          <i className="fas fa-search SearchIcon" />
        </label>
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
