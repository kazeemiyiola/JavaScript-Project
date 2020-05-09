let suv = {
    manufacturer: "jaguar Land Rover",
    marques: "Land Rover",
    product: "Range Rover",
    model: "Supercharged  SV Autobiography",
    powerTrain: "5.0 l V8 petrol engine",
    year: "2016"
    };


   // /handling object/get  keys
  for (let key in suv) {
      console.log(key);
  }

   //handling object --- getting keys value in pairs using a for in loop
   for (let key in suv) {
    console.log(key, suv[key]);
}

// handling array with FOR IN loop
let carMarker = ["Mercedes", "Toyota", "BMW", "Ferari", "Ford"];
for (let index in carMarker) {
    console.log(index, carMarker[index]);
}
   