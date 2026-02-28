// 21 - Closures
// A function remembers variables from its outer scope 
function outer() {
    let count = 0; 

    return function inner() {
        count++; 
        console.log(count); 
    }; 
}

const counter = outer(); 

counter(); 
counter(); 
counter(); 