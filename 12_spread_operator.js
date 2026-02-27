// 12 - Spread Operator (...)
// Copy or merge arrays 
let arr1 = [1, 2, 3];
let arr2 = [...arr1];  

console.log(arr1); 
console.log(arr2)

// Merge
let a = [1, 2]; 
let b = [3, 4]; 

let merged = [...a, ...b]; 
console.log(merged); 

// Find max value; 
let nums = [5, 10, 15]; 
console.log(Math.max(...nums)); 