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
    // console.log(
    //   `Order receieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    // );
  },

  orderPasta: function (img1, img2, img3) {
    // console.log(
    //   `Here is your delicious pasta with ${img1}, ${img2} and ${img3}`
    // );
  },
};

// Real world example
const ingredients = [
  // prompt("Let's make pasta!"),
  // prompt('Ingredient 2'),
  // prompt('Ingredient 3'),
];
// console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = { ...restaurant, founder: 'Bobbi', foundedIn: 2003 };

// console.log(newRestaurant);

const restCopy = { ...restaurant };

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
// Spread operator
//creates a copy of whichever array variable '...' is placed in front of - writes the values from the array and copies them to wherever specified
//can only be used in places where values are generally separated by commas - it doesn't create new variables

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
// console.log(newArr);
//also expands each value from an array to individual values, not in an array format
// console.log(...newArr);
// console.log(...arr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy array
const mainMenu = [...restaurant.mainMenu];

// Join 2 arrays
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(fullMenu);

//Iterables are arrays, strings, maps and sets - but not objects
const str = 'Leah';
const letters = [...str];
// console.log(letters);
//produces an array of each separate letter
// console.log(...str);
//produces each separate letter as its own value outside of an array
// console.log(`${...str} Skinner);
//this won't work, inside the template literal here a variable is expected, not a place where values seperated by commas are expected
//it is only expected as an argument being passed into a function or when building a new array

////////////////////////////////////////////////////////
// Destructuring objects

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

// SPREAD VS REST OPERATOR

//1) Destructuring

//SPREAD - on the right hand side of the = operator
let arr0 = [1, 2, ...[3, 4]];

//REST - on the left of the = operator
//it's called rest because it takes the rest/remaining elements of the array and put them into a new array(e.g. others), it collects the element that haven't been used
const [t, v, ...others] = [1, 2, 3, 4, 5];
// console.log(t, v, others);
//the outcome is, 1, 2, [3, 4, 5]

//...otherFood grabs the remainder of the elements in both mainMenu and starterMenu after the last variable (doesn't include any skipped elements as we've done after pizza (,)) and puts them in their own array.
//as a result the rest element needs to be the last one
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  // console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(4, 5, 5, 6, 9, 56);

const x = [23, 56, 89];
add(...x);

// SHORT-CIRCUITING (short curcuit evaluation)
// with these evaluations, js will 'short-curcuit' aftet the first element if it is true, it won't even look at the rest of the evaluation

//using any data type
//doesn't need to be a boolean
//will return the truthy value

console.log('----OR----')

console.log(3 || 'Leah');
//result: 3
console.log('' || 'Leah');
//result: Leah
console.log(true || 0);
//result: true
console.log(undefined || null);
//result: null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
//the result is Hello, the first truthy that is evaluated will be printed

//Ternary operator
//if numGuests is true e.g. exists, guests1 = numGuests
//if it doesn't, print 10

// restaurant.numGuests = 30;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);

//You get the same result with || (or)

const guests2 = restaurant.numGuests || 10;

console.log(guests2);

console.log('----AND----');

//The and operator executes only when both values are true

console.log(0 && 'Leah');
console.log('Hi' && 'Leah');

//Practical Example

//this if statement can be shortened to an AND operator evaluation 

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach')
};

restaurant.orderPizza && restaurant.orderPizza('cheese', 'more cheese');

//if the orderPizza function exists, run the function
