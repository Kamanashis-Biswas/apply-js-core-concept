/* const myInch = 12;
const myFeet = myInch / 12;
console.log("My feet", myFeet);

const dadaInch=144;
const dadaFeet=dadaInch/12;
console.log("Dada Feet", dadaFeet);

const didaInch=60;
const didaFeet=didaInch/12;
console.log("dida Feet", didaFeet); */

function inchToFeet(inchs) {
    const feet = inchs / 12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log("Feet Is", dadaFeet);

const didaInches = 148;
const didaFeet = inchToFeet(didaInches);
console.log("Feet Is", didaFeet);