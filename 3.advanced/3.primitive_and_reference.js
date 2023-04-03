// primitive datatype
let num1 = 100;
let num2 = num1;

num1 = 50;

console.log(num1, num2); //50,100

// reference datatype
let arr1 = ["num1", "num2"];
let arr2 = arr1;
arr1.push("num3"); 
console.log(arr1, arr2); //["num1", "num2", "num3"];