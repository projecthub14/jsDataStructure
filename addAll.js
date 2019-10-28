//CHALLENGE 1 : ADD ALL NUMBERS
// Return a sum of all parameters entered regardless
//of amount of numbers - NO ARRAYS
//ex. addAll(2,5,6,7) === 20

// function addAll() {
//   //SOLUTION 1: arguments ES5 and for loop
//   //get the arguments to array
//Array.From -> in ES6
//   var args = Array.prototype.slice.call(arguments);
//   var total = 0;
//   for (i = 0; i < args.length; i++) {
//     total = total + args[i];
//   }

//   return total;
//
// }

function addAll(...numbers) {
  //SOLUTION 2: Rest ES6 and reduce / forEach
  //   let sum = 0;
  //   numbers.forEach(val => (sum += val));
  //   return sum;
  return numbers.reduce((acc, curr) => (acc += curr));
}

console.log(addAll(2, 5, 6, 7, 5));
