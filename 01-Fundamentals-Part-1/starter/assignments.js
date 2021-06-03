//VALUES & VARIABLES

let country = "New Zealand";
let continent = "Oceania";
let population = 5000000;

// console.log(country, ",", continent, ",", population);

// DATA TYPES

// let isIsland = true;
const language = "English";

// console.log(isIsland, population, country, language);

// console.log(language);

//BASIC OPERATORS

// const currentYear = 2020
// const ageLeah = currentYear - 1992

// console.log(ageLeah);

// const firstName = "Leah";
// const lastName = "Skinner"

// console.log(firstName + ' ' + lastName);

// let halfPop = population / 2

// console.log(halfPop / 2);

// population++

// console.log(population);

// const avePop = 33000000;

// console.log(population > avePop);
// console.log(population < avePop);


// STRINGS & TEMPLATE LITERALS

// const description = country + " is in " + continent + " and its population of " + population + " people speak " + language;

// console.log(description);

// const firstName = 'Leah';
// const job = 'student';
// const birthYear = 1992;
// const year = 2021;

// let leah = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;

// leah = `I'm ${firstName}`

// console.log(leah);

// console.log(`string
// multi
// lines`);

// const description = `${country} is in ${continent} and its population of ${population} people speak ${language}`;

// console.log(description);


//IF ELSE STATEMENTS

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Yeaahhh");
// } else {
//     const yearsLeft = 18 - age;
//   console.log(`Nahhh wait ${yearsLeft} years`);
// }

// const birthYear = 2001;

// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// let ave = 33000000
// let diff = ave - population

// if(population >= 33000000) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${diff} million below average`);
// }


// TYPE CONVERSION AND COERCION

// console.log('9' - '5');
// // equals 4

// console.log('19' - '13' + '17');
// //equals 617

// console.log('19' - '13' + 17);
// //equals 23

// console.log('123' < 57);
// //equals Nan x
// //equals false

// console.log(5 + 6 + '4' + 9 - 4 - 2);
// //equals 1143


// EQUALITY OPERATERS , == VS ===

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'))

// if (numNeighbours === 1) {
//     console.log('Only one border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders?!');
// }


//LOGICAL OPERATORS

// const day = 'thursday';

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log("Write code examples");
// } else if (day === 'friday') {
//     console.log('record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');
// } else {
//     console.log('Not a valid day');
// }


//SWITCH STATEMENT

const language2 = 'English';

switch (language2) {
    case 'Chinese':
    case 'Mandarin':
        console.log('Most number of native speakers');
        break;
    case 'Spanish':
        console.log('2nd most');
        break;
    case 'English':
        console.log('3rd most');
        break;
    case 'Hindi':
        console.log('4th most');
        break;
    case 'Hindi':
        console.log('4th most');
        break;
    default:
        console.log('Invalid input');    
}