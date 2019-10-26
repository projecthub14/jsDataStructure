//CHALLENGE 2: VALIDATE A PALINDROME
//return true is palindrome and false if not
//ex. isPalindrome('racecar') === 'true' , is Palindrome
//('hello') == false
function isPalindrom(str) {
  const revString = str
    .split("")
    .reverse()
    .join("");
  return revString === str;
}

console.log(isPalindrom("madam"));
