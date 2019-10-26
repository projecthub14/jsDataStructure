//CHALLENGES 5: LETTER CHANGES
//Change every letter of the string to the one that follows iterate
//and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newStr = newStr.replace(/[aeiou]/gi, vowel => vowel.toUpperCase());
  return newStr;
}

console.log(letterChanges("Hello There"));
