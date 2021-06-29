'use strict';

//when selecting an id rather than a class using query selector, you will need to insert a hash at the beginning, as opposed to using a dot
let playing = true;
let score0Ele = document.querySelector('#score--0');

//alternatively you can use .getELementById instead of .querySelector and omit the #
let score1Ele = document.getElementById('score--1');

//variables for current score for each player
let current0Ele = document.getElementById('current--0');
let current1Ele = document.getElementById('current--1');

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');


//create varibles for the dice and roll buttons so they are easily accessible, and less code needs to be repeated
const diceEle = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//starting conditions
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
//create a variable for the active player, 0 being player 1, 1 being player 2
let activePlayer = 0;

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //toggle will remove the following class if it's set and add it if it's not.
  //applying it to both elements will ensure only one will have it set
  player1.classList.toggle('player--active')
  player2.classList.toggle('player--active')
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
}

//dice roll functionality
btnRoll.addEventListener('click', function () {
  //if playing = true
  if (playing) {
    //generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //display dice
    diceEle.classList.remove('hidden');
    diceEle.src = `dice-${dice}.png`;
    
    //check if dice rolled is not a 1, if true player keeps going
    if (dice !== 1) {
      //add current dice number to score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      
      //if not true (player rolls a 1) switch player
    } else {
      switchPlayer();   
    }
  }
});

//hold button functionality
btnHold.addEventListener('click', () => {
  if (playing) {
    //add current score to active player's score
    scores[activePlayer] += currentScore;
    //this reads as scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //check if active player's score has reached or exceeded 100
    if (scores[activePlayer] >= 20) {
      //finish the game
      playing = false;
      diceEle.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      //switch to other player
      switchPlayer();
    }
  }
});

//new game button functionality
btnNew.addEventListener('click', () => {
  console.log('new button clicked');
  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  current0Ele.textContent = 0;
  current1Ele.textContent = 0;
  player1.classList.add('player--active')
  player2.classList.remove('player--active')
})
