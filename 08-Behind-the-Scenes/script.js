'use strict';

const calcAge = birthYear => {
  const age = 2021 - birthYear;

  const printAge = () => {
    const output = `${firstName} is ${age}, born in ${birthYear}`;
    // console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const string = `Oh, and you're a millenial ${firstName}`;
      // console.log(string);
    }
    ///string variable isn't available outside of its block scope
    //console.log(string);
    ///millenial varable is available because var variables are function scoped so are accessible outside of the block it's defined in - not advisable to be used
    // console.log(millenial);
  };
  printAge();

  return age;
};

const firstName = 'Leah';
calcAge(1992);
///these variables aren't available in the global scope
//console.log(age);
//printAge();

//'this' keyword

// console.log(this)

// const calcAge = function(birthYear) {
//   console.log(2017 - birthYear);
//   console.log(this);
// }
// calcAge(1991);


//primitive types

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
// console.log(lastName, oldLastName);
//result = Davis, Williams
//oldLastName equals Williams because at that stage in the code, lastName did equal Willams and had not yet been reassigned

//reference types

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);
//result = 
//Before marriage: {firstName: "Jessica", lastName: "Davis", age: 27}
//After marriage: {firstName: "Jessica", lastName: "Davis", age: 27}
//the variables jessica and marriedJessica are pointing to the same object in the heap storage, marriedJessica isn't creating a new object, therefore any changes to the data will also occur in the jessica object
//the stack storage only holds the reference to the original object in the heap


//copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

//the assign function merges two objects and assigns the empty object the stated variable name
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis'

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
//this method is just a shallow copy. Any objects within the original object (e.g. an array) that is changed only in the copy of the original object will be altered in both objects. It's still pointing to the memory in the heap