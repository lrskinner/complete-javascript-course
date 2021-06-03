//CHALLENGE 1

// let heightMark = 1.69;
// let massMark = 78;

// let heightJohn = 1.95;
// let massJohn = 92;

// let bmiMark = massMark / heightMark** 2;
// let bmiJohn = massJohn / heightJohn** 2;

// console.log(bmiMark);
// console.log(bmiJohn);

// let markHigherBmi = bmiMark > bmiJohn;

// console.log(markHigherBmi);

let heightMark = 1.88;
let massMark = 95;

let heightJohn = 1.76;
let massJohn = 85;


//CHALLENGE 2
let bmiM = massMark / heightMark** 2;
let bmiMark = bmiM.toFixed(2)

let bmiJ = massJohn / heightJohn** 2;
let bmiJohn = bmiJ.toFixed(2)

// console.log(bmiMark);
// console.log(bmiJohn);

let markHigherBmi = bmiMark > bmiJohn;


console.log(markHigherBmi);

if(markHigherBmi) {
    console.log(`Mark's BMI of ${bmiMark} is higher than John's BMI of ${bmiJohn}!`);
} else {
    console.log(`John's BMI of ${bmiJohn} is higher than Mark's BMI of ${bmiMark}!`);
}



