// Primitive (value) type and Reference data types in JS
// Value or primitive data are string, number, booleans  --also we have symbol, new and undefined
// ReferenceTypes --- Objects, Arrays, Function
//Array and function are object in JS

//Primitive Data
let x = 10;
let y = x;

x = 7;

console.log(x);
console.log(y);

//Reference Data
let a = {value: 10 };
let b = a;

a.value = 15
console.log(a);
console.log(b);

let number = 10;
function increment () {
    ++number;
}
increment(number);
console.log(number);

let obj = {value: 20}
function add(obj) {
    obj.value++;
}
add(obj)
console.log(obj.value)

