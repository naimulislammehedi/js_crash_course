// 15 - Looping Objects
// for...in (for objects)
let user = {
    name: 'Mehedi', 
    age: 20
}

for (let key in user) {
    console.log(key); 
    console.log(key, user[key]); 
}


// for...of (for arrays)
let numbers = [10, 20, 30]; 
for (let num of numbers) {
    console.log(num); 
}