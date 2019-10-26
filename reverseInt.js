//CHALLENGE 3: REVERSE AN INTEGER
//Return an integer in reverse
//ex. reverseInt(521) === 125

function reverseInt(input) {
  const revString = input
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(revString) * Math.sign(input);
}
console.log(reverseInt(124));
