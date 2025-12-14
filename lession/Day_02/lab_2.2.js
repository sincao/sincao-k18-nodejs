const readline = require("readline-sync");

let number = Number(readline.question("Please input a number: "));

if (Number.isNaN(number)) {
  console.log("The inputed value is not a number");
}else if (number % 2 == 0) {
  console.log("this is even number");
} else {
  console.log("this is odd number");
}
