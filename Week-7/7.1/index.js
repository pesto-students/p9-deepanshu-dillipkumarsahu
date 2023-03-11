function maxSubarraySum(A) {
  let maxEndingHere = A[0];
  let maxSoFar = A[0];

  for (let i = 1; i < A.length; i++) {
    maxEndingHere = Math.max(A[i], maxEndingHere + A[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

let A = [1, 2, 3, 4, -10];
let maxSum = maxSubarraySum(A);
console.log(maxSum); // Output: 10
