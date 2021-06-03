// if the bill value is between 50 and 300, tip will be 15% of the bill

// if any other value, the tip will be 20% of the bill

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// const tip = t.toFixed(2)

console.log(`“The bill was $${bill}, the tip was $${tip} and the total value $${bill + tip}`);


