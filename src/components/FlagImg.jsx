import React from 'react';
import PropTypes from 'prop-types';

const flags = [
  {
    image: 'https://www.countryflags.io/us/shiny/64.png',
    name: 'American',
  },
  {
    image: 'https://www.countryflags.io/gb/shiny/64.png',
    name: 'British',
  },
  {
    image: 'https://www.countryflags.io/ca/shiny/64.png',
    name: 'Canadian',
  },
  {
    image: 'https://www.countryflags.io/cn/shiny/64.png',
    name: 'Chinese',
  },
  {
    image: 'https://www.countryflags.io/bq/shiny/64.png',
    name: 'Dutch',
  },
  {
    image: 'https://www.countryflags.io/eg/shiny/64.png',
    name: 'Egyptian',
  },
  {
    image: 'https://www.countryflags.io/fr/shiny/64.png',
    name: 'French',
  },
  {
    image: 'https://www.countryflags.io/gr/shiny/64.png',
    name: 'Greek',
  },
  {
    image: 'https://www.countryflags.io/in/shiny/64.png',
    name: 'Indian',
  },
  {
    image: 'https://www.countryflags.io/ie/shiny/64.png',
    name: 'Irish',
  },
  {
    image: 'https://www.countryflags.io/it/shiny/64.png',
    name: 'Italian',
  },
  {
    image: 'https://www.countryflags.io/jm/shiny/64.png',
    name: 'Jamaican',
  },
  {
    image: 'https://www.countryflags.io/jp/shiny/64.png',
    name: 'Japanese',
  },
  {
    image: 'https://www.countryflags.io/ke/shiny/64.png',
    name: 'Kenyan',
  },
  {
    image: 'https://www.countryflags.io/my/shiny/64.png',
    name: 'Malaysian',
  },
  {
    image: 'https://www.countryflags.io/mx/shiny/64.png',
    name: 'Mexican',
  },
  {
    image: 'https://www.countryflags.io/ma/shiny/64.png',
    name: 'Moroccan',
  },
  {
    image: 'https://www.countryflags.io/pl/shiny/64.png',
    name: 'Polish',
  },
  {
    image: 'https://www.countryflags.io/ru/shiny/64.png',
    name: 'Russian',
  },
  {
    image: 'https://www.countryflags.io/es/shiny/64.png',
    name: 'Spanish',
  },
  {
    image: 'https://www.countryflags.io/th/shiny/64.png',
    name: 'Thai',
  },
  {
    image: 'https://www.countryflags.io/tn/shiny/64.png',
    name: 'Tunisian',
  },
  {
    image: 'https://www.countryflags.io/tr/shiny/64.png',
    name: 'Turkish',
  },
  {
    image: 'https://i.ibb.co/MgtW0nR/unknown.png',
    name: 'Unknown',
  },
  {
    image: 'https://www.countryflags.io/vn/shiny/64.png',
    name: 'Vietnamese',
  },
];
function FlagImg(props) {
  const { area, key, getListFromNat } = props;
  const flag = flags.find((imgFlag) => imgFlag.name === area);
  return (
    <div className="FlagImg">
      <button
        type="button"
        className="btnMealarea"
        onClick={getListFromNat}
        key={key}
      >
        <img src={flag.image} alt={flag.name} />
      </button>
    </div>
  );
}

FlagImg.propTypes = {
  area: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  getListFromNat: PropTypes.func.isRequired,
};

export default FlagImg;
