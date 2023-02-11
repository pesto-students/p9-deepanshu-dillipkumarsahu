// custom promise class
class CustomPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((cb) => cb(this.value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((cb) => cb(this.reason));
      }
    };

    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    if (this.state === "fulfilled") {
      onFulfilled(this.value);
    }

    if (this.state === "rejected") {
      onRejected(this.reason);
    }

    if (this.state === "pending") {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
  }
}

// getNumber function declearation
function getNumber(resolutionTime) {
  return new CustomPromise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 500) + 1;
      console.log(randomNumber % 5);
      if (randomNumber % 5 === 0) {
        reject(`${randomNumber} is divisible by 5`);
      } else {
        resolve(randomNumber);
      }
    }, resolutionTime);
  });
}

const res = getNumber(1000);
console.log(res);
