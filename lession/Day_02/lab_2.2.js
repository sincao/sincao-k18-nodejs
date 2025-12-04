const readline = require("readline-sync");

let number = Number(readline.question("Please input a number: "));

if (number % 2 == 0) {
    console.log("this is even number")
} else {
    console.log("this is odd number")
}