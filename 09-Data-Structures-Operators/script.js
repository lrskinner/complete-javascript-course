'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 12,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //destructure restaurant object within the function arguments and create default values
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '01:00',
    address,
  }) {
    console.log(
      `Order receieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//calling the function with the required values as an object
restaurant.orderDelivery({
  time: '22:30',
  address: '10 Table Street',
  mainIndex: 2,
  starterIndex: 1,
});

restaurant.orderDelivery({
  address: 'Pizza Hut',
  starterIndex: 1,
});

////////////////////////////////////////////////////////
//destructuring objects

//you don't need to manually skip with a space and comma like with arrays
//the order doesn't matter either

//creates 3 new variables based off of the restaurant object
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
//result:
//Classico Italiano {thu: {…}, fri: {…}, sat: {…}}fri: {open: 11, close: 23}sat: {open: 0, close: 24}thu: {open: 12, close: 12}__proto__: Object (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

//you can also use this same method to rename the variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

//setting default values when there is no value present
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
//the menu variable doesn't exist so shows as an empty array

////////////////////////////////////////////////////////
//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 54 };
//can't begin a new line of code with a curly bracket, it's expecting a code block in front of it, wrap in parenthesis to fix this
({ a, b } = obj);
// console.log(a, b);

////////////////////////////////////////////////////////
//destructuring nested objects
//access the object fri, then further in to the open and close key & value pairs. You can also rename the variables here
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(o, c);

////////////////////////////////////////////////////////
//destructuring arrays
// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//nested destructuring
// const nested = [2, 4, [5, 6]];
//to access the values, create a new array variable. to skip the second value in the original array, add in an empty space
// const [i, , j] = nested;
// console.log(i, j);
//result:
//2 (2) [5, 6]

// const [k, , [l, m]] = nested;
// console.log(k, l, m);
//result:
//2 5 6

// Setting default values when no value is present
// const [p, q, r] = [8, 9];
// console.log(p, q, r);
//result:
//8 9 undefined

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
//result:
//8 9 1
