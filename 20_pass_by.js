// 20 - Pass by Value vs Pass by Reference
// Pass by Value (Primitive)
let x = 10; 

function changeValue(num) {
    num = 20; 
}

changeValue(x); 
console.log(x)

// Pass by Referene (Object/ Arrays)
let user = {name: "Mehedi"}; 

function changeName(obj) {
    obj.name = "John"; 
}

changeName(user); 
console.log(user.name); 