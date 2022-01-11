'use strict';

//this selector allows you to access content inside elements - through a class in this example
console.log(document.querySelector('.message').textContent);

//assign the message class a different value
document.querySelector('.message').textContent = '🥳 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 30;
document.querySelector('.number').textContent = 50;

document.querySelector('.guess').value = 20;

console.log(document.querySelector(".guess").value);

//click handler needs 2 values - the action and the function detailing the method
document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value)
})
