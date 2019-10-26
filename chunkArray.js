//CHALLENGE 2: ARRAY CHUNKING
//Split an array into chunked arrays of a specific length
//ex. chunkArray([1,2,3,4,5,6,7],3) === [[1,2,3],[4,5,6].[7]]
//ex. chunkarray([1,2,3,4,5,6,7],2) === [[1,2],[3,4],[5,6],[7]]

function chunkArray(arr, len) {
  //SOLUTION 1
  let chunkArray = [];
  let i = 0;

  while (i < arr.length) {
    //slice from index to index + chunkLength
    //and push into chunkArray
    chunkArray.push(arr.slice(i, i + len));
    //increment by chunk length
    i = i + len;
  }
  return chunkArray;

  //SOLUTION 2
  // initalize the chunk array with
  //   const chunkArray = [];

  //   //loop through array
  //   arr.forEach(function(val) {
  //     //get last element
  //     const last = chunkArray[chunkArray.length - 1];

  //     //check if last is undefined and is last length is equal to chunk length
  //     if (!last || last.length === len) {
  //       chunkArray.push([val]);
  //     } else {
  //       last.push(val);
  //     }
  //     // console.log(chunkArray);
  //   });
  //   return chunkArray;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
