'use strict'

// Initialize Variables
const topLeftBox = document.querySelector('#top-left');
const topMidBox = document.querySelector('#top-mid');
const topRightBox = document.querySelector('#top-right');

const midLeftBox = document.querySelector('#mid-left');
const midMidBox = document.querySelector('#mid-mid');
const midRightBox = document.querySelector('#mid-right');

const botLeftBox = document.querySelector('#bot-left');
const botMidBox = document.querySelector('#bot-mid');
const botRightBox = document.querySelector('#bot-right');

// const x = document.querySelector('.x')
// const o = document.querySelectorAll('.o')




let isXTurn = false;
let isOTurn = false;

// Winning Conditions
const winningConditions = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

// Click Listeners
topLeftBox.addEventListener('click', ()=> {
    topLeftBox.querySelector('.x').style.display = 'block'
})
topMidBox.addEventListener('click', ()=> {
    alert('clicked');
})
topRightBox.addEventListener('click', ()=> {
    topRightBox.querySelector('.x').style.display = 'block'
})
midLeftBox.addEventListener('click', ()=> {
    alert('clicked');
})
midMidBox.addEventListener('click', ()=> {
    alert('clicked');
})
midRightBox.addEventListener('click', ()=> {
    alert('clicked');
})
botLeftBox.addEventListener('click', ()=> {
    alert('clicked');
})
botMidBox.addEventListener('click', ()=> {
    alert('clicked');
})
botRightBox.addEventListener('click', ()=> {
    alert('clicked');
})

// Check if game is over
// Check if box is empty
// Rotate between "X"s and "O"s every other turn
// Start with "X"s