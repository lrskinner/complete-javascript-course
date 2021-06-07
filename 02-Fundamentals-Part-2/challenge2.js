'use strict'
//function that calculates the tip of the bill, if between 50-300 times the bill by .15 to get 15%. If any amount outside of this parameter, times the bill by .2 to get 20%
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

//array of bill amounts
const bills = [125, 155, 44]

//array of tip amounts. each array value is the result of the calcTip function, with each index of the bill array
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips);

//array of total amounts, each index of the tip amount added to each index of the bill amount
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);

