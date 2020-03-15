const calculateTotals = (object) => Object.values(object)
  .reduce((aggregate, current) => aggregate + current, 0);

export default calculateTotals;
