import React from 'react';
import axios from 'axios';
import './Mealarea.css';

class Mealarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: [],
    };
    this.getAreaName = this.getAreaName.bind(this);
  }

  componentDidMount() {
    this.getAreaName();
  }

  getAreaName() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          areas: data.meals,
        });
      });
  }

  render() {
    const { areas } = this.state;
    return (
      <div className="MealArea">
        {areas === [] ? (
          <p>Loading</p>
        ) : (
          <div>
            <h2>Search by Area Meal :</h2>
            <ul>
              {areas.map((area) => (
                <li key={area.strArea}>{area.strArea}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Mealarea;
