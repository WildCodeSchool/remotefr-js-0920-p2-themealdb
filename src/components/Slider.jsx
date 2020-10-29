import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

const Slider = ({ image }) => (
  <div className="slider">
    <h1>{image}</h1>
  </div>
);
Slider.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Slider;
