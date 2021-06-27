'use strict';

//when selecting an id rather than a class using query selector, you will need to insert a hash at the beginning, as opposed to using a dot
const score0Ele = document.querySelector('#score--0');

//alternatively you can use .getELementById instead of .querySelector and omit the #
const score1Ele = document.getElementById('score--1');

//create varibles for the dice and roll buttons so they are easily accessible, and less code needs to be repeated
const diceEle = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

//starting conditions
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden')

console.log(diceEle);

