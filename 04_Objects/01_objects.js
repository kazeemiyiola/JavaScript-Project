/*let carDetails = {
    manufacturer: "Audi",
    series: "A5",
    transmission: "Automatic",
    getNameOfCar: function (){
        console.log("Audi A5")
    }
}

let carDetails2 = {
    manufacturer: "Mercedes",
    series: "E Class",
    transmission: "Manual",
    getNameOfCar: function (){
        console.log("Mercedes E-200")
    }
}
*/

// function without parameter
getNameOfCar: function carDetails(){
    console.log("Mercedes E-200")
}

// function
getNameOfCar: function carDetails(){
    console.log("Mercedes E-200")
}
//carDetails - CamelCase
//factory funtions - a function that return an object

function carDetails(manufacturer, series, transmission){
return {
    manufacturer,
    series,
    transmission
  }
}

let audi = carDetails("Audi", "A5", "Automatics");
console.log(audi);

let mercedes = carDetails("mercedes", "E-200", "Manual");
console.log(mercedes);