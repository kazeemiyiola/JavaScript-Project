
// handling array with FOR IN loop
let carMarkers = ["Mercedes", "Toyota", "BMW", "Ferari", "Ford"];
for (let index in carMarkers) {
    console.log(index, carMarkers[index]);
}
   
// handling array with FOR OF loop
for (let carMaker in carMarkers) {
    console.log(carMaker);
}
   