'use strict';

//set random secret number
let secretNumber = Math.trunc(Math.random()*20)+1;
//create variable for score and highscore so it can be easily accessed and tracked
let score = 20;
let highscore = 0;

// let selectMessage = document.querySelector('.message').textContent

//returns 'check' class element then executes the event listener function
//the 2 parameters of the function is the click class element and the value of a function
document.querySelector('.check').addEventListener('click', function() {
  //the value of the function is the input from the guess box(class) which is a string
  //because this number will ne compared to the number it's trying to match, we need to convert it to a number
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';

  //when guess is correct
  } else if (guess === secretNumber){
    document.querySelector('.message').textContent = 'CORRECT!';
    //change background colour to green
    document.querySelector('body').style.backgroundColor = '#60b347';
    //double width of number
    document.querySelector('.number').style.width = '30rem';
    //display secret number when guessed correctly
    document.querySelector('.number').textContent = secretNumber;
    //if the winning score is higher than the current highscore, change the value of the highscore to the winning score
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

  //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
    document.querySelector('.message').textContent = 'Try a higher number';
    score--;
    document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose';
      document.querySelector('.score').textContent = 0
    }

  //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
    document.querySelector('.message').textContent = 'Try a lower number';
    score--;
    document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose';
      document.querySelector('.score').textContent = 0
    }
  } else if (document.querySelector('.score').textContent = 0) {
    document.querySelector('.message').textContent = 'You lose';
  }
})


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;  
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})

//when message = correct number 
//save score value to highscore value
//if a highernumber is attained, change highscore value to higher number

