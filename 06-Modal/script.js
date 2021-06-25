'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal')

console.log(btnsOpenModal);

//cycles through each modal 
for (let i = 0; i < btnsOpenModal.length; i++) 
  btnsOpenModal[i].addEventListener('click', () => {
    // console.log('BUTTON CLICKED!');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

    btnCloseModal.addEventListener('click', () => {
    // console.log('X btn clicked');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  })



