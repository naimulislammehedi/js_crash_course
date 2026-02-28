// 17 - Default Parameters
// Used when argument is not provided. 
function greet(name = "Guest") {
    return "Hello " + name; 
}

console.log(greet()); 
console.log(greet("John")); 