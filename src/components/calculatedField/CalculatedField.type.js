import PropTypes from 'prop-types';

const Type = PropTypes.shape({
  shortName: PropTypes.string.isRequired,
  longName: PropTypes.string.isRequired,
  formula: PropTypes.string.isRequired,
  calculate: PropTypes.func.isRequired,
});

export default Type;
