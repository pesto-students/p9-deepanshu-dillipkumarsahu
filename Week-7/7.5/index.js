const A = [5, 10, 3, 2, 50, 80];
const B = 78;

function checkPresence(A, B) {
  const firstItem = A[A.length - 1];
  let status;
  for (let i = A.length - 2; i >= 0; i--) {
    if (firstItem - A[i] === B) status = 1;
    else if (status !== 1) status = 0;
  }
  return status;
}

const res = checkPresence(A, B);
console.log(res);
