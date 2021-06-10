'use strict'

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

//loop through the bills array
for (let i = 0; i <= bills.length -1; i++) {
  //create variable that stores the result of the calcTip function that is performed on each instance in the bills array
  const tipsCalc = calcTip(bills[i]);
  //add that variable to the empty tips array
  tips.push(tipsCalc)
  //add the tipsCalc variable + each instance in the bills array to the empty totals array 
  totals.push(tipsCalc + bills[i])
}

console.log(totals);

//this function calulates the average of the totals array 
const calcAverage = function(arr) {
  let sum = 0; 
  //loop through the given array
  for (let i = 0; i < arr.length; i++) {
    //assign the variable sum the value: sum + each instance in the given array
    sum += arr[i];
    //(sum = sum + arr[i])
  }
  //returns the average of the sum variable by dividing it by the length of the given array
  return sum / arr.length
} 

console.log(calcAverage(totals));
