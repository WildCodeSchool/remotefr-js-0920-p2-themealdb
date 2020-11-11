import React from 'react';
import axios from 'axios';
import FlagImg from './FlagImg';
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
        <h2>Search by Area Meal :</h2>
        <ul>
          {areas.map((area) => (
            <li key={area.strArea}>
              <FlagImg />
              {area.strArea}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Mealarea;
