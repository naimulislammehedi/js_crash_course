// 18 - Arrow Functions
// Shorter Syntax 
const greet = (name) => {
    return "Hello " + name; 
}; 

console.log(greet("John"))

// Single parameter (no brackets needed)
const squar = num => num * num; 
console.log(squar(5)); 

// Multiple parameters
const add = (a, b) => a + b; 
console.log(add(10, 5)); 