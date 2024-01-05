const isNumber = (input) => !isNaN(input);

const sortArrayByIntegerKey = (array, key, asc = true) => {
  return array.sort((a, b) => {
    if ((a[key] > b[key] && asc === true) || (a[key] < b[key] && asc === false)) return 1;
    if ((a[key] < b[key] && asc === true) || (a[key] > b[key] && asc === false)) return -1;
    return 0;
  });
};

module.exports = { isNumber, sortArrayByIntegerKey };