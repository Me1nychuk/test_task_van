import PropTypes from "prop-types";

const CarItemPropTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    adults: PropTypes.number.isRequired,
    children: PropTypes.number.isRequired,
    engine: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    tank: PropTypes.string.isRequired,
    consumption: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    details: PropTypes.shape({
      airConditioner: PropTypes.number.isRequired,
      bathroom: PropTypes.number.isRequired,
      kitchen: PropTypes.number.isRequired,
      beds: PropTypes.number.isRequired,
      TV: PropTypes.number.isRequired,
      CD: PropTypes.number.isRequired,
      radio: PropTypes.number.isRequired,
      shower: PropTypes.number.isRequired,
      toilet: PropTypes.number.isRequired,
      freezer: PropTypes.number.isRequired,
      hob: PropTypes.number.isRequired,
      microwave: PropTypes.number.isRequired,
      gas: PropTypes.string.isRequired,
      water: PropTypes.string.isRequired,
    }).isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        reviewer_name: PropTypes.string.isRequired,
        reviewer_rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default CarItemPropTypes;
