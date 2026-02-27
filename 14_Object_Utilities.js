// 14 - Object Utilities
let person = {
    name: 'Mehedi', 
    age: 25
}; 

console.log(Object.keys(person)); 
console.log(Object.values(person)); 
console.log(Object.entries(person)); 

// seal -> cannot add or remove properties 
// Object.seal(person);

// Delete property
delete person.age; 

console.log(person); 

// Freeze Object -> Cannot change anything 
Object.freeze(person); 
person.name = "John"; 
console.log(person); 

 