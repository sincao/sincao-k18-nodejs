const { read } = require("fs");
const readline = require("readline-sync");

let userHeight = Number(readline.question("Input user's height(m): "));
let userWeight = Number(readline.question("Input user's weight(kg): "));
let calculatedIBM = userWeight / (userHeight * userHeight);
calculatedIBM.toFixed(1)

if (calculatedIBM < 18.5) {
    console.log("You are underweight. You should inscrease the weight");
} else if (calculatedIBM >= 18.5 && calculatedIBM <= 24.9) {
    console.log("Your weight is normal. You should keep as is ");
} else if (calculatedIBM >= 25 && calculatedIBM <= 29.9) {
    console.log("Your are overweight. You should do more exercise to lose weight");
} else {
    console.log("You are obesity")
}