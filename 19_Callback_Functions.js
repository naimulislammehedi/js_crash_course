// 19 - Callback Functions 
// Function passed as argument to another function 
function greet(name, callback) {
    console.log("HI " + name); 
    callback(); 
}

function sayBay() {
    console.log("Goodbye!"); 
}

greet("Mehedi", sayBay); 