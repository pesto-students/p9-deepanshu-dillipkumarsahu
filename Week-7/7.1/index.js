const array = [2, -4, 6, 7, -8, 3, 1];

function contiguousSubArrayLargestSum(arry) {
  let finalSum = 0;
  for (let i = 0; i < arry.length; i++) {
    if (i < arry.length - i) {
      let largestSum = 0;
      for (let j = i; j < 4 + i; j++) {
        if (arry[j]) {
          largestSum = largestSum + arry[j];
          console.log(arry[j]);
        }
      }
        if (finalSum < largestSum) {
          finalSum = largestSum;
        }
      console.log("Largest Sum", largestSum);
    }
  }
  return finalSum;
}

const res = contiguousSubArrayLargestSum(array);
console.log("-----------------------");
console.log("Final largest sum -", res);
