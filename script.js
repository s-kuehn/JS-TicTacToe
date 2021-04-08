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

const boxes = [topLeftBox, topMidBox, topRightBox, midLeftBox,
    midMidBox, midRightBox, botLeftBox, botMidBox, botRightBox]

let isXTurn = true;


function toggleTurn (x,o) {
    if (isXTurn) {
        x.style.display = 'block';
        o.style.display = 'none';
        isXTurn = false;
       } else {
        o.style.display = 'block';
        x.style.display = 'none';
        isXTurn = true;
       }
}

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
    let x = topLeftBox.querySelector('.x')
    let o = topLeftBox.querySelector('.o')
    toggleTurn(x,o);
})
topMidBox.addEventListener('click', ()=> {
    let x = topMidBox.querySelector('.x')
    let o = topMidBox.querySelector('.o')
    toggleTurn(x,o);
})
topRightBox.addEventListener('click', ()=> {
    let x = topRightBox.querySelector('.x')
    let o = topRightBox.querySelector('.o')
    toggleTurn(x,o);
})
midLeftBox.addEventListener('click', ()=> {
    let x = midLeftBox.querySelector('.x')
    let o = midLeftBox.querySelector('.o')
    toggleTurn(x,o);
})
midMidBox.addEventListener('click', ()=> {
    let x = midMidBox.querySelector('.x')
    let o = midMidBox.querySelector('.o')
    toggleTurn(x,o);
})
midRightBox.addEventListener('click', ()=> {
    let x = midRightBox.querySelector('.x')
    let o = midRightBox.querySelector('.o')
    toggleTurn(x,o);
})
botLeftBox.addEventListener('click', ()=> {
    let x = botLeftBox.querySelector('.x')
    let o = botLeftBox.querySelector('.o')
    toggleTurn(x,o);
})
botMidBox.addEventListener('click', ()=> {
    let x = botMidBox.querySelector('.x')
    let o = botMidBox.querySelector('.o')
    toggleTurn(x,o);
})
botRightBox.addEventListener('click', ()=> {
    let x = botRightBox.querySelector('.x')
    let o = botRightBox.querySelector('.o')
    toggleTurn(x,o);
})

document.querySelector('.new-game').addEventListener('click', ()=> {
    for (let i = 0; i<boxes.length; i++) {
        boxes[i].querySelector('.x').style.display = 'none'
        boxes[i].querySelector('.o').style.display = 'none'
    }
})

// Check if game is over
// Check if box is empty
// Rotate between "X"s and "O"s every other turn
// Start with "X"s