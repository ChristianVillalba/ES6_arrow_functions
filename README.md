# ES6: Arrow Functions JS practice
#### How we can shorten our code

Created with [CodeSandbox](https://codesandbox.io/).      
Notes from: React module.     
[The Complete 2021 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)  
Instructor: Dr. Angela Yu      

## Description
This app uses the numbers inside an array: 3, 56, 2, 48, 5       
and prints in the console (DevTools) :
* An Array with the squared numbers
* An Array with the double of the numbers
* An Array with the numbers smaller than 10
* The sum of all the numbers
* The first number in the array bigger than 10
* The index of the first number in the array bigger than 10

This is an extension of the repository [ES6: map , filter , reduce , find , findindex](https://github.com/ChristianVillalba/ES6_map_filter_reduce_find_findindex.git)     
but the functions were converted to Array Functions and the unncessary code was deleted.

## Notes:
Arrow Functions: A shorter way to write JS functions

How to shorten our functions       
eg: function that square our numbers
```
const squareNumbers = numbers.map(function square(x) {
  return x*x
})
console.log(squareNumbers)
```
We can shorten the function, converting to Anonymous Function, deleting the name of the function "square":
```
const squareNumbers = numbers.map(function (x) {
  return x*x
})
console.log(squareNumbers)
```
We can also convert the Anonymous Function to Arrow Function:
```
const squareNumbers = numbers.map( (x) => {
  return x*x;
})
console.log(squareNumbers)
```
And here we can still make some changes to reduce our code:
*  With only one input we can get rid of parentheses ```numbers.map( x => { ```
   *  If we have more than one input we will need a set of parentheses eg : ```(x , y)```
   *  Note: CodeSandbox rewrite the parentheses when I try to delete them
* If we have a single line statement returning a single expression ```{return x*x;}``` we can delete the keyword return and the curly braces 

The final result would be:
```
const squareNumbers = numbers.map( x => x*x )
console.log(squareNumbers)
```


## What I have learned with this project:
* Use of Arrow Functions
* Conversion to Arrow Functions
* Delete unnecessary code in the Arrow Functions
