//CHALLENGE 3 : FLATTEN ARRAY
//Take an array of arrays and flatten to a single array of
//ex. [[1,2],[3,4],[5,6],[7]] = [1,2,3,4,5,6,7]

function flattenArray(arrays) {
  //SOLUTION 1:
  let flatArray = [];

  arrays.forEach(el => {
    if (Array.isArray(el)) {
      flatArray = flatArray.concat(flattenArray(el));
    } else {
      flatArray.push(el);
    }
  });
  return flatArray;
  //SOLUTION 2:
  //   return arrays.reduce((prev, val) => prev.concat(val));
  //SOLUTION 3:
  //   return [].concat.apply([], arrays);

  //SOLUTION 4:
  // console.log([].concat([1,2],[3,4]))
  //return [].concat(...arrays);
}

console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));
