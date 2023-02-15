function vowelCount(string) {
  const map = new Map();
  const key = map.size + 1;
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const latter of string) {
    const char = latter.toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }

  // store vowel count in map
  map.set(key, count);

  return map;
}

const res = vowelCount("Sahu");
console.log(res);
