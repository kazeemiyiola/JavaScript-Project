// LOGICAL OR compares non booleans and always returns first operand
// where the first operand is not a falsy value (false, undefined, null, NaN, 0, "")
let carTransmission = "Manual";
let defaultTransmission = "automatic";

//let currentTransmission = carTransmission || defaultTransmission;
//console.log(currentTransmission);

//  logical AND compares non booleans and always returns second operand
let currentTransmission = carTransmission && defaultTransmission;
console.log(currentTransmission);
