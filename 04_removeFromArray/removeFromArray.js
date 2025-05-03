const removeFromArray = function(array, ...values) {
  let filter = array.filter((item) => !values.includes(item));
  
  return filter;
};

// Do not edit below this line
module.exports = removeFromArray;
