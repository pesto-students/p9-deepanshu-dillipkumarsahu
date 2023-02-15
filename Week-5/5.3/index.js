function hasDuplicate(array) {
  const set = new Set(array);

  return set.size === array.length
    ? "This Array has no duplicate item"
    : "This Array has duplicate item";
}

const res = hasDuplicate([1, 2, 3, 4, 4]);

console.log(res);
