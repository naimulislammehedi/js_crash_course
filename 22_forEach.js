// 22 - forEach
// Loops through an array, executes a function for each element.

const numbers = [1, 2, 3, 4]; 

numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`); 
}); 

// Note: forEach does not return a new array.