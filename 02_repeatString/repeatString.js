const repeatString = function(str, times) {
  let result = '';

  if (times < 0) {
    return 'ERROR'; // Not an actual error.
  }

  for (let i = 1; i <= times; i ++) {
    result += str;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
