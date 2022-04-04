'use strict';

//this selector allows you to access content inside elements - through a class in this example
console.log(document.querySelector('.message').textContent);

//assign the message class a different value
// document.querySelector('.message').textContent = '🥳 Correct Number!';

//Game code

const secretNumber = Math.trunc(Math.random() *20) +1; //will produce random number up to 20, + 1 makes sure 20 will be included

let score = 20;



//click handler needs 2 values - the action and the function detailing the method
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

  // when player wins  
  } else if (guess === secretNumber) {
		document.querySelector(".message").textContent = '🥳 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';


  // when guess is too high  
	} else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🥴 Too high!';
      score--; //same as score = score -1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😈 You lose!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#f71128';
    };

  // when guess is too low  
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🥲 Too low';
      score--; //same as score = score -1
      document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '😈 You lose!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#fa1f0f';
      }
  }
});

// again button function
document.querySelector('.again').addEventListener('click', function () {
  // secretNumber = Math.trunc(Math.random() *20) +1; 
  // score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});