const { indexOf } = require("lodash");

const S = [-1, 2, 1, -4];
const target = 1;

function nearestSumOfTarget(array, target) {
  let diff = Math.abs(
    array.indexOf(array[0] + array[1] + array[2]) - array.indexOf(target)
  );

  for (let i = 1; i < 4; i++) {
    let sum = 0;
    sum += array[i];

    if (diff > Math.abs(array.indexOf(sum) - array.indexOf(target))) {
    }
  }

  return nearestSum;
}

const res = nearestSumOfTarget(S, target);
console.log(res);
