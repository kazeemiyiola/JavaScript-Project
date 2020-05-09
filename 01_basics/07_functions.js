// A method is a function when it is in a class
// A method is a block of code to perform specific tasks,, // in c# or a ,void, return, static, Accessmodifier, parameter, argument

function greet(){
    console.log("Good morning")

}

// Different btw argument and parament--- 
//argument are the actual values passing in a method - 
//parament are the varible hold the values that are passing in a method
// function with a parameter
function morningGreeting( name){
    console.log("Good morning" + name)
}
morningGreeting("kaz");

// function with multiple parameters
function info( name, age){
    console.log( name + "is" + age + "years old");
}
inf("kaz", 40);

// function with return value
function add( num1, num2){
    let answer = num1 + num2
    return answer;
}
let total = add(10, 20)
console.log(total)