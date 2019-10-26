function longestWord(sen) {
  //create filter array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  //Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  //if multiple words , put into array
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );

  //Check  if more than one array val
  if (longestWordArr.length === 1) {
    return longestWordArr.toString();
  }
  //result
  return longestWordArr;
}
console.log(longestWord("hello there , my name is Brad"));
