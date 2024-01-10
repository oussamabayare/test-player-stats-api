const isNumber = (input) => !isNaN(input);

const sortArrayByIntegerKey = (array, key) => {
  return array.sort((a, b) => {
    if (a[key] === b[key]) return 0;
    if (a[key] > b[key]) return 1;
    else return -1;
  });
};

module.exports = { isNumber, sortArrayByIntegerKey };
