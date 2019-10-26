//CHALLENGE 4: ANAGRAM
//Return true if anagram and false if not
//ex. 'elbow' === 'below'
//ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

//helper function
function formatStr(str) {
  return (
    str
      //anything not word character
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("")
  );
}

console.log(isAnagram("Dormitory", "dirty room##"));
