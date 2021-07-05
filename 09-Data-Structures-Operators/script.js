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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring an array
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
//to access the values, create a new array variable. to skip the second value in the original array, add in an empty space
const [i, , j] = nested;
// console.log(i, j);
//result:
//2 (2) [5, 6]

const [k, , [l, m]] = nested;
console.log(k, l, m);
//result:
//2 5 6

// Setting default values when no value is present
// const [p, q, r] = [8, 9];
// console.log(p, q, r);
//result:
//8 9 undefined

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
//result:
//8 9 1