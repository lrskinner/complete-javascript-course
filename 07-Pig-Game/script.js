'use strict';

//when selecting an id rather than a class using query selector, you will need to insert a hash at the beginning, as opposed to using a dot
const score0Ele = document.querySelector('#score--0');

//alternatively you can use .getELementById instead of .querySelector and omit the #
const score1Ele = document.getElementById('score--1');

//variables for current score for each player
const current0Ele = document.getElementById('current--0')
const current1Ele = document.getElementById('current--1')

//create varibles for the dice and roll buttons so they are easily accessible, and less code needs to be repeated
const diceEle = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


//starting conditions
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden')

let currentScore = 0;

//dice roll functionality
btnRoll.addEventListener('click', function () {
  //generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //display dice
  diceEle.classList.remove('hidden');
  diceEle.src = `dice-${dice}.png`;

  //check if dice rolled is not a 1, if true player keeps going
  if (dice !== 1) {
    //add current dice number to score
    currentScore += dice;
    current0Ele.textContent = currentScore //change later to be dynamic depending on which player is selected
    
  //if not true (player rolls a 1) switch player
  } else {

  }
});
