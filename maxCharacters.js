// CHALLENGE 5 : MAX CHARACTER
//Return the Character that is most common in a string
//ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = 0;

  str.split("").forEach(char => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  //iterate object
  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxCharacter("abbbaacc"));
