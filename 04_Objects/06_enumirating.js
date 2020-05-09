/*let carDetails = {
    manufacturer: "jaguar Land Rover",
    transmission: "Automatics",
    marques:{
        suv: "Land Rover",
        car: "Jaguar"
    },
    product: {
        SVAutobiography: "Range Rover",
        RangeRoverSport: "Range Rover Sports",
        JaguarSport: "F-Type Coupe",
        JaguarSedan: "XF"
    }
};
*/


let carDetails = {
    manufacturer: "jaguar Land Rover",
    transmission: "Automatics",
    suv: "Land Rover",        
    product: 'Range Rover'
    
};

//option1 
//for(let key in carDetails) console.log(key);

// option2
//for ( let key in carDetails) console.log(key, carDetails[key])

// Bad option3 cannot iterate
//for (let carDetail of carDetails) console.log(carDetails)
 
// options4
// using object built object
//for (let key of Object.keys(carDetails)) console.log(key);

// option5
for (let car of Object.entries(carDetails)) console.log(car);



