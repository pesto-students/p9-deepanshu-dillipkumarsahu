const array = [0, 2, 1, 2, 0];

function sortArray(arry) {
  return arry.sort((a, b) => a - b);
}

const res = sortArray(array);
console.log(res);
