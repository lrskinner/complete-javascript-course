// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// alternatively: function printForecast(arr) {
// or fat arrow function
const printForecast = arr => {
  //similar to setting i as 0, set str to empty string
  let str = '';
  for (let i = 0; i < arr.length; i++) {
   str = str + `${arr[i]}°C in ${i + 1} days...`;
  }
  return console.log('...' + str);

}
//   return console.log(`...${arr[0]}°C in 1 days...${arr[1]}°C in 2 days...${arr[2]}°C in 3 days`);
// }

printForecast(data1)
