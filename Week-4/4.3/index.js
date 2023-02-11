class Fibonacci {
  [Symbol.iterator]() {
    let prev = 0;
    let curr = 1;
    return {
      next() {
        const result = prev;
        prev = curr;
        curr = prev + result;
        return {
          value: result,
          done: false,
        };
      },
    };
  }
}

const fib = new Fibonacci();

for (const num of fib) {
  if (num > 1000) {
    break;
  } else {
    console.log(num);
  }
}
