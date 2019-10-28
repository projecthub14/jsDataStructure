//CHALLENGE 3 : SEEK & DESTROY
//Remove from the array whatever is in the following arguments . Return the leftover
//values in an array
//ex. seekAndDestroy([2,3,4,6,6,'hello'],2,6) == [3,4,'hello']

//SOLUTION 1 : arguments , indexOf , filter
// function seekAndDestroy(arr) {
//   const args = Array.from(arguments);

//   function filterArray(arr) {
//     //return true if NOT in array
//     return args.indexOf(arr) === -1;
//     //([2, 3, 4, 6, 6, "hello"], 2, 6).indexOf(2)
//   }

//   return arr.filter(filterArray);
// }

//SOLUTION 2 : ...rest , filter & includes
function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));
