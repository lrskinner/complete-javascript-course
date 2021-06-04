'use strict'
//Test 1 data
// const dolphSco1 = 44;
// const dolphSco2 = 23;
// const dolphSco3 = 71;

// const koalaSco1 = 65;
// const koalaSco2 = 54;
// const koalaSco3 = 49;

//Test data 2
const dolphSco1 = 85;
const dolphSco2 = 54;
const dolphSco3 = 41;

const koalaSco1 = 23;
const koalaSco2 = 34;
const koalaSco3 = 27;

const calcAverage = (a,b,c) => (a + b + c) / 3;

const dolphAveSco = calcAverage(dolphSco1, dolphSco2, dolphSco3).toFixed(0);

const koalaAveSco = calcAverage(koalaSco1, koalaSco2, koalaSco3).toFixed(0);

console.log(`The Dolphin's average score is ${dolphAveSco} and the Koala's average score is ${koalaAveSco}`);

const checkWinner = (dolphAveSco, koalaAveSco) => {
    if (dolphAveSco >= 2 * koalaAveSco) {
        console.log(`Dolphins win! (${dolphAveSco} vs. ${koalaAveSco})`);
    } else if (koalaAveSco >= 2 * dolphAveSco) {
        console.log(`Koala's win! (${koalaAveSco} vs. ${dolphAveSco})`);
    } else {
        console.log('No winner');
    }
}

checkWinner(dolphAveSco, koalaAveSco);