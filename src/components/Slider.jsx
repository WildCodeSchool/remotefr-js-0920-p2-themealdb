import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({ number }) => <div className="slider">{number}</div>;
Slider.propTypes = {
  number: PropTypes.string.isRequired,
};

export default Slider;
