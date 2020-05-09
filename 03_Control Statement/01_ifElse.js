let condition = true;
let anothercondition = true;

if(condition){
// dosomething
}
else if(anotherCondition){
// dosomething
}


let temp = 26;

if(temp > 25){
    console.log("Go for swim");
} else if(temp> 15){
    console.log("Go a walk");
} else if(temp> 10){
    console.log("Go for a run");
}else if(temp> 5){
    console.log("Go a gym");
}else if(temp> 0){
    console.log("Watch TV");
}


let hour = 6;

if(hour >= 21 && hour <= 24){
    console.log("Good Night");
} else if(18 && hour <= 21){
    console.log("Good Evening");
} else if(12 && hour <= 18){
    console.log("Good Afternoon");
}else if(0 && hour <= 12){
    console.log("Good morning");
}


//console.log('Enter a number between 0-24:')
hour = 7;
 let greeting = hour >= 12 && hour <= 24 ? "Good Night" : "Good Day";
 console.log(greeting);

 if(hour >= 12 && hour <= 24){
    console.log("Good Night");
} else {
    console.log("Good Day");
}
    

