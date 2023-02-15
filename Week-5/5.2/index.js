function vowelCount(string) {
  const map = new Map();
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const latter of string) {
    const char = latter.toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }

  // store vowel count in map
  map.set(map.size + 1, count);

  return map;
}

const res = vowelCount("Sahu");
console.log(res);
