const dolphScore1 = 0
const dolphScore2 = 10
const dolphScore3 = 40

const dolphAveScore = (dolphScore1 + dolphScore2 + dolphScore3) / 3

const koalaScore1 = 0
const koalaScore2 = 95
const koalaScore3 = 123

const koalaAveScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3

console.log(dolphAveScore);
console.log(koalaAveScore);

if (dolphAveScore > koalaAveScore && dolphAveScore >= 100) {
    console.log('Dolphins win!');
} else if (koalaAveScore > dolphAveScore && koalaAveScore >= 100) {
        console.log('Koalas win!');
} else if (dolphAveScore === koalaAveScore && dolphAveScore || koalaAveScore >= 100) {
    console.log("It's a draw :o");
} else {
    console.log('no one wins :(');
}
