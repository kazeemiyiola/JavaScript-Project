// javascript objects are dynamics
const carDetails = {
    manufacturer: "Audi",
    series: "A5",
    transmission: "Automatic",
    getNameOfCar: function (){
        console.log("Audi A5")
    },
};
console.log(carDetails);

// deleting from an object
delete carDetails.manufacturer
console.log(carDetails)

// Add propety to an object
carDetails.colour = "Blue";
console.log(carDetails)

