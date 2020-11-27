import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

const Slider = (props) => {
  const { img } = props;
  return (
    <div className="slider">
      <img src={img} alt={img} />
    </div>
  );
};
Slider.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Slider;
