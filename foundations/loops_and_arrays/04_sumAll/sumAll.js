const sumAll = function (a, b) {
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }
  let numbersToSum = [];
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    numbersToSum.push(i);
  }
  return numbersToSum.reduce((accumulator, current) => accumulator + current);
};

// Do not edit below this line
module.exports = sumAll;
