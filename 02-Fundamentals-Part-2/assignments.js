'use strict';

//FUNCTIONS

function describeCountry(country, population, capitalCity) {
    const message = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return message;
}

let describeFin = describeCountry('Finland', 6, 'Helsinki');
let describeNZ = describeCountry('New Zealand', 5, 'Wellington');
let describeAus = describeCountry('Australia', 28, 'Canberra');
console.log(describeFin, '\n', describeNZ, '\n', describeAus);

