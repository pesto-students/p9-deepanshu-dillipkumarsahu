function memorize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    // console.log("--", key);
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

function calulate(n, n2 = 9, n3 = 5) {
  //   console.log("cal-", n);
  return n + 5 - (n2 + 3) + n3 * 8 + n / 2;
}

function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}

const calulateM = memorize(calulate);


time(() => calulateM(20));
time(() => calulateM(20));
time(() => calulateM(20));
time(() => calulateM(20));
time(() => calulateM(20, 22));
time(() => calulateM(20, 22));
time(() => calulateM(20, 22));
time(() => calulateM(20, 22));
time(() => calulateM(20, 22, 24));
time(() => calulateM(20, 22, 24));
time(() => calulateM(20, 22, 24));
time(() => calulateM(20, 22, 24));

// time(() => addM(20));
// time(() => addM(20));
// time(() => addM(20));
// time(() => addM(20));
// time(() => addM(20));
// time(() => addM(20));
// time(() => addM(20));
// time(() => addM(20));
// time(() => addM(20));
// time(() => addM(20));
// time(() => addM(20));
// time(() => addM(20));
// time(() => addM(20));
// time(() => addM(20));
