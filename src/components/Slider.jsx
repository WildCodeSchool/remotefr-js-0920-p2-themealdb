import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({ image }) => (
  <div className="slider">
    <img src={image} alt="" />
  </div>
);
Slider.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Slider;
