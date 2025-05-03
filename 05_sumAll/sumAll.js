const sumLoop = function(start, end) {
  let result = 0;

  for (let i = start; i <= end; i++) {
    result += i;
  }

  return result;
}

const sumAll = function(left, right) {
  let error = 'ERROR';

  for (const arg of arguments) {
    if (arg < 0 || !Number.isInteger(arg)) {
      return error;
    }
  }

  if (left < right) {
    return sumLoop(left, right);
  } else {
    return sumLoop(right, left);
  }
};

// Do not edit below this line
module.exports = sumAll;
