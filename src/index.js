import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// Array Function Example
const squareNumbers = numbers.map((x) => x * x);
console.log(squareNumbers);

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
const doubledNumbers = numbers.map((x) => x * 2);
console.log(doubledNumbers);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
const smallerThanTen = numbers.filter((x) => x < 10);
console.log(smallerThanTen);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
const sumNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(sumNumber);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
const firstBiggerThanTen = numbers.find((x) => x > 10);
console.log(firstBiggerThanTen);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
const firstIndexBiggerThanTen = numbers.findIndex((x) => x > 10);
console.log(firstIndexBiggerThanTen);
