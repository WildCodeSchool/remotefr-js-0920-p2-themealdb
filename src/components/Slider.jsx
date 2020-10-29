import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

const Slider = ({ img }) => (
  <div className="slider">
    <img src={img} alt="food" />
  </div>
);
Slider.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Slider;
