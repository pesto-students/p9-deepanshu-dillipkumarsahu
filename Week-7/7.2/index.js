const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
];
// 00, 01, 02, 12, 22, 21, 20, 10, 11
function makeSpiralOrder(matrix) {
  const spiralOrderArray = [];

  // insert first row
  for (let i = 0; i < matrix[0].length; i++) {
    spiralOrderArray.push(matrix[0][i]);
  }

  // insert last element of every row except the last and first one
  for (let i = 1; i < matrix.length - 1; i++) {
    spiralOrderArray.push(matrix[i][matrix[i].length - 1]);
  }

  // insert last row
  for (let i = matrix[matrix.length - 1].length - 1; i >= 0; i--) {
    spiralOrderArray.push(matrix[matrix.length - 1][i]);
  }

  // insert first element of every row except the last and first one
  for (let i = matrix.length - 2; i > 0; i--) {
    spiralOrderArray.push(matrix[i][0]);
  }

  // insert middle element of every row except the last and first one
  for (let i = 1; i < matrix.length - 1; i++) {
    spiralOrderArray.push(matrix[i][1]);
  }

  return spiralOrderArray;
}

const res = makeSpiralOrder(matrix);
console.log("Result ", res);
