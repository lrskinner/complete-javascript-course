'use strict';

//this selector allows you to access content inside elements - through a class in this example
console.log(document.querySelector('.message').textContent);

//assign the message class a different value
// document.querySelector('.message').textContent = '🥳 Correct Number!';

//Game code

const secretNumber = Math.trunc(Math.random() *20) +1; //will produce random number up to 20, + 1 makes sure 20 will be included
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

const displayNumber = function(number) {
  document.querySelector('.number').textContent = number;
}

const changeNumberStyle = function(value) {
  document.querySelector('.number').style.width = value;
}

const changeBackgroundColor = function(value) {
  document.querySelector('body').style.backgroundColor = value;
}

//click handler needs 2 values - the action and the function detailing the method
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

  // when player wins  
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');
    displayNumber(secretNumber);

    // style changes
    changeBackgroundColor('#60b347');
    changeNumberStyle('30rem');

    // highscore function
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  // when guess is wrong  
	} else if(guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🥴 Too high!' : '🥲 Too low');
      score--; //same as score = score -1
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😈 You lose!');
      document.querySelector('.score').textContent = 0;
      changeBackgroundColor('#f71128');
    };
  }
});

// again button function
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  changeBackgroundColor('#222');
  changeNumberStyle('15rem');
});