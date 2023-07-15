function milesToKilometer(miles){
    const kilometer = miles * 1.6; 
    return kilometer;
}


const mile = 148;
const kiloMeter = milesToKilometer(mile);
console.log("KiloMeter Is", kiloMeter);