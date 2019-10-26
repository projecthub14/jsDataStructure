//CHALLENGE 6: FIZZBUZZ
//Write a program that prints all the numbers from 1 to 100. For multiples of 3,instead
//of the number , print "Fizz" , for multiples of 5 print "Buzz" . For numbers which are
//multiples of both 3 and 5 , print "FizzBuzz"

function fizzBuzz() {
  let input = 1;
  let result = "";
  for (let input = 1; input <= 100; input++) {
    if (input % 15 === 0) {
      result += "\n FizzBuzz ";
    } else if (input % 3 === 0) {
      result += "\n Fizz ";
    } else if (input % 5 === 0) {
      result += "\n Buzz ";
    } else {
      result += "\n" + input;
    }
  }
  return result;
}

console.log(fizzBuzz());
