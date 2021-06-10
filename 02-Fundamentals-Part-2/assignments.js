"use strict";

//FUNCTIONS

// function describeCountry(country, population, capitalCity) {
//   const message = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return message;
// }

// let describeFin = describeCountry("Finland", 6, "Helsinki");
// let describeNZ = describeCountry("New Zealand", 5, "Wellington");
// let describeAus = describeCountry("Australia", 28, "Canberra");
// console.log(describeFin, '\n', describeNZ, '\n', describeAus);

//FUNCTION DECLARATIONS VS EXPRESSIONS

// Function declaration
function perOfWorld1(population) {
  return (population / 7900) * 100;
}

// Function expression
// const perOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const nzPop = perOfWorld1(5);
// const chinaPop = perOfWorld1(1411);

// console.log(nzPop, chinaPop);

// const portPop = perOfWorld2(10);
// const usaPop = perOfWorld2(332);

// console.log(portPop, usaPop);

//ARROW FUNCTIONS

// const perOfWorld3 = (population) => (population / 7900) * 100;

// const nzPop = perOfWorld3(5);
// const chinaPop = perOfWorld3(1411);

// console.log(nzPop, chinaPop);

//FUNCTIONS CALLING OTHER FUNCTIONS

// const describePopulation = (country, population) => {
//   const percentage = perOfWorld1(population).toFixed(2);
//   const description = `${country} has a population of ${population} million people, which is about ${percentage} of the worlds population.`;
  // console.log(description);
// };

// describePopulation("NZ", 5);

//INTRO TO ARRAYS

// const populations = [200, 20, 5, 60];

// boolean value denoting if the array length is 4 or not
// console.log(populations.length === 4);

//calculates the percentage of each population in relation to the population of the world, using the perOfWorld1 function created earlier
// const percentages = [
//   perOfWorld1(populations[0]),
//   perOfWorld1(populations[1]),
//   perOfWorld1(populations[2]),
//   perOfWorld1(populations[3]),
// ];
// console.log(percentages);

//BASIC ARRAY METHODS

// const neighbours = ['France', 'Poland', 'Switzerland'];

//add an element to the end of an array
// neighbours.push('Utopia')

//remove the last element from the end of an array
// neighbours.pop('Utopia')

//conditional statement dependent on 'Germany' being in the array
// if (neighbours.includes('Germany')) {
	// console.log(`You've picked a European country`);
// } else {
	// console.log('Probably not a European country');
// }

//alternatively (! = if Germany is not included, the opposite of the statement)
// if (!neighbours.includes('Germany')) {
	// console.log('Probably not a European country');
// }

//find the index of a particular element (= 0)
// console.log(neighbours.indexOf('France'));

//change the element
// neighbours[0] = 'Beautiful France'

//alternatively 
// neighbours[neighbours.indexOf('France')] = 'Beautiful France';

// console.log(neighbours);

//INTRO TO OBJECTS

// const myCountry = {
// 	country: 'New Zealand',
// 	capital: 'Wellington',
// 	language: 'English',
// 	population: '5 million',
// 	neighbours: 0,
// }

// console.log(myCountry);

// console.log(`${myCountry.country} has a population of ${myCountry.population} people`);

//OBJECT CHALLENGE

// const jonas = {
// 	firstName: 'Jonas',
// 	lastName: 'Schmedtmann',
// 	friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);

//DOT VS BRACKET NOTATION

// const myCountry = {
// 	country: 'New Zealand',
// 	capital: 'Wellington',
// 	language: 'English',
// 	population: 5,
// 	neighbours: 7,
// }

// const myCountryDes = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours} neighbouring countries and its capital is ${myCountry.capital}.`;

// console.log(myCountryDes);

// myCountry.population += 2

// console.log(myCountry.population);

// myCountry['population'] -= 3

// console.log(myCountry.population);

//OBJECT CHALLENGE 2

// const jonas = {
// 	firstName: 'Jonas',
// 	lastName: 'Schmedtmann',
// 	job: 'teacher',
// 	birthYear: 1991,
// 	friends: ['Michael', 'Peter', 'Steven'],
// 	hasDriversLicence: true,
// 	calcAge: function () {
// 		this.age = 2021 - this.birthYear
// 		return this.age
// 	},
// 	jonasSummary: function () { 
// 		return `${jonas.firstName} is a ${jonas.calcAge()} year old ${jonas.job} who has ${this.hasDriversLicence ? 'a' : 'no'} drivers licence.`
// 	},	
// }

// console.log(jonas.jonasSummary());

//ITERATION THE FOR LOOP

for (let voter = 1; voter <= 50; voter++) {
	// console.log(`Voter number ${voter} is currently voting`);
}

//LOOPING ARRAYS, BREAKING AND CONTINUING
function perOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [200, 20, 5, 60];
const percentages = [];

for (let i = 0; i < populations.length; i++) {
	const percentages1 = perOfWorld1(populations[i]);
	percentages.push(percentages1)
}

// console.log(percentages);


//LOOPING BACKWARDS AND LOOPS IN LOOPS

const listOfNeighbours = [
	[
	'Canada',
	'Mexico',
	'Spain',
	'Norway',
	'Sweden',
	'Russia'
	]
]
//go through the listOfNeighbours array and access the array
// for(let i = 0; i < listOfNeighbours.length; i++) 
	//go through that array we just accessed and access each element 
	// for (let x = 0; x < listOfNeighbours[i].length; x++)
	//print each element inside the array that is inside the listOfNeighbours array
	// console.log(`Neighbour: ${listOfNeighbours[i][x]}`);

//ANOTHER LOOP IN LOOP

// for (let exercise = 1; exercise < 4; exercise ++) {
// 	console.log(`----Starting exercise ${exercise}----`);

// 	for (let rep = 1; rep < 6; rep++) {
// 		console.log(`----Exercise ${exercise}: Lifting weights repitition ${rep}----`);
// 	}
// }


//WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`--for loop-- Lifting weights repetition ${rep}`);
// }

//same as for loop above, using while instead
// let rep = 1;
// while(rep <= 10) {
// 	console.log(`--while loop-- Lifting weights repetition ${rep}`);
// 	rep++;
// }

let dice = Math.trunc(Math.random() * 5) + 1;

while (dice !== 5) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 5) + 1;
}