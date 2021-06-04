'use strict';

//FUNCTIONS

function describeCountry(country, population, capitalCity) {
    const message = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return message;
}

let describeFin = describeCountry('Finland', 6, 'Helsinki');
let describeNZ = describeCountry('New Zealand', 5, 'Wellington');
let describeAus = describeCountry('Australia', 28, 'Canberra');
// console.log(describeFin, '\n', describeNZ, '\n', describeAus);


//FUNCTION DECLARATIONS VS EXPRESSIONS

//Function declaration
function perOfWorld1(population) {
    return (population / 7900) * 100;
} 

//Function expression
const perOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

// const nzPop = perOfWorld1(5);
// const chinaPop = perOfWorld1(1411);

// console.log(nzPop, chinaPop);

// const portPop = perOfWorld2(10);
// const usaPop = perOfWorld2(332);

// console.log(portPop, usaPop);


//ARROW FUNCTIONS

const perOfWorld3 = population => (population / 7900) * 100;

const nzPop = perOfWorld3(5);
const chinaPop = perOfWorld3(1411);

console.log(nzPop, chinaPop);