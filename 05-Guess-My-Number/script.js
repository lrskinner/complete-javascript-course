'use strict';

//set random secret number
let secretNumber = Math.trunc(Math.random()*20)+1;
//create variable for score and highscore so it can be easily accessed and tracked
let score = 20;
let highscore = 0;

//refactoring by getting rid of duplicate code and instead creating a function that can be called 
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
}

const changeBackgroundColor = color => {
document.querySelector('body').style.backgroundColor = color;
}

const changeScore = score => {
  document.querySelector('.score').textContent = score;
}

const secretNumberCalc = number => { 
number = Math.trunc(Math.random()*20)+1;
}

//returns 'check' class element then executes the event listener function
//the 2 parameters of the function is the click class element and the value of a function
document.querySelector('.check').addEventListener('click', function() {
  //the value of the function is the input from the guess box(class) which is a string
  //because this number will ne compared to the number it's trying to match, we need to convert it to a number
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('No number');
    //document.querySelector('.message').textContent = 'No number';

  //when guess is correct
  } else if (guess === secretNumber){
    displayMessage('CORRECT!');
    //the below code does the same as the above function
    //--> document.querySelector('.message').textContent = 'CORRECT!';

    //change background colour to green
    changeBackgroundColor('#60b347');
    //double width of number
    document.querySelector('.number').style.width = '30rem';
    //display secret number when guessed correctly
    document.querySelector('.number').textContent = secretNumber;
    //if the winning score is higher than the current highscore, change the value of the highscore to the winning score
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }


  //when guess is wrong (too low or too high)
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess < secretNumber ? 'Try a higher number' : 'Try a lower number');
        score--;
        changeScore(score);
        } else {
          displayMessage('You lose');
          changeScore(0);
        }
    } 

  //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //   document.querySelector('.message').textContent = 'Try a higher number';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose';
  //     document.querySelector('.score').textContent = 0
  //   }

  //when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //   document.querySelector('.message').textContent = 'Try a lower number';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose';
  //     document.querySelector('.score').textContent = 0
  //   }
  // } else if (document.querySelector('.score').textContent = 0) {
  //   document.querySelector('.message').textContent = 'You lose';
  // }
})

//again button functionality - restores game to the beginning state while retaining the highscore
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumberCalc(secretNumber);
  displayMessage('Start guessing...');
  changeScore(score);  
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})

