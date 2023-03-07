const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// 00, 01, 02, 12, 22, 21, 20, 10, 11
function makeSpiralOrder(matrix) {
    const spiralOrderArray = [];

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        if(i === 0){
            for (let j = 0; j < row.length; j++) {
                spiralOrderArray.push(row[j])
            }
        }
        else if(i === matrix.length-1){
            // for (let j = row.length; j < 0; j--) {
               //     spiralOrderArray.push(row[j])
            // }
        }
        else{
            // 
        }
    }
    return spiralOrderArray;
}

const res = makeSpiralOrder(matrix);
console.log("Result ", res);
