'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal')

console.log(btnsOpenModal);

//cycles through each modal and removes the hidden class on the selected modal when clicked
for (let i = 0; i < btnsOpenModal.length; i++) 
  btnsOpenModal[i].addEventListener('click', () => {
    // console.log('BUTTON CLICKED!');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

    //this targets the close-modal 'x' button and adds the hidden class back to the element when either the x or anywhere on the overlay is clicked 

    // btnCloseModal.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');
    
    // overlay.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');
    

    //refactored by converting the shared code to a function so it is available to be used multiple times with less code
    const closeModal = () => {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }

    btnCloseModal.addEventListener('click', closeModal)
    overlay.addEventListener('click', closeModal)
      


 



