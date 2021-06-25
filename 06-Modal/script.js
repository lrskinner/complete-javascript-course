'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal')

console.log(btnsOpenModal);

//refactored code by converting the shared code for closing and opening modals to functions so they are available to be used multiple times with less code

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

//cycles through each modal and removes the hidden class on the selected modal when clicked
for (let i = 0; i < btnsOpenModal.length; i++) 
  btnsOpenModal[i].addEventListener('click', openModal);
  
    //this targets the close-modal 'x' button and adds the hidden class back to the element when either the x or anywhere on the overlay is clicked 

    // btnCloseModal.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');
    
    // overlay.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');
         

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

//document lets you access everything in the app
//keydown will fire the action as soon as a key is pressed, as opposed to key up which is fired when the key is released and keypress that fires continuously as long as the key is still pressed
// document.addEventListener('keydown', e => {
//   console.log(e);
//   console.log(e.key);
//   //looks at the key event and checks if it is equal to the esc
//   if (e.key === 'Escape') {
//     //checks if the modal does NOT contain the hidden class, so is currently visible, and only executes if true
//     if(!modal.classList.contains('hidden'))
//     closeModal();
//   }
// })

//above code refactored
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();  
})


      


 



