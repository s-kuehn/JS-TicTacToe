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


function toggleTurn (x,o,location) {
    if (x.style.display !== 'block' && o.style.display !== 'block') {
        if (isXTurn) {
            board[location[0]][location[1]] = 'x'
            x.style.display = 'block';
            o.style.display = 'none';
            isXTurn = false;
           } else {
            board[location[0]][location[1]] = 'o'
            o.style.display = 'block';
            x.style.display = 'none';
            isXTurn = true;
           }
    }
}

const board = [
    ['','',''],
    ['','',''],
    ['','',''],
]

// Winning Conditions
const winningConditions = [
    [[0,0],[0,1],[0,2]],
    [[0,0],[1,0],[2,0]],
    [[0,0],[1,1],[2,2]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,1],[2,0]],
    [[0,2],[1,2],[2,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]]
]

function checkForWin() {
    for (let i = 0; i<winningConditions.length; i++) {
        // console.log(winningConditions[i][0], winningConditions[i][1], winningConditions[i][2]);
        // console.log(winningConditions[i][0][0],winningConditions[i][0][1])
        // console.log(board[winningConditions[i][0][0]][winningConditions[i][0][1]])
        // board[0][0]
        for (let j = 0; i<winningConditions[i].length; j++) {
            if (board[winningConditions[i][j][0]][winningConditions[i][j][1]] === 'x'){
                console.log('TEST!!!')
            }
        }

        // console.log(board[winningConditions[i][0][0]],winningConditions[i][0][1])
    
        // for (let j = 0; j<board.length; j++) {
        //     if ()
        //     console.log(board[j]);
        // }
    }
}

// Click Listeners
topLeftBox.addEventListener('click', ()=> {
    let x = topLeftBox.querySelector('.x')
    let o = topLeftBox.querySelector('.o')
    toggleTurn(x,o,[0,0]);
    checkForWin()
})
topMidBox.addEventListener('click', ()=> {
    let x = topMidBox.querySelector('.x')
    let o = topMidBox.querySelector('.o')
    toggleTurn(x,o,[0,1]);
    checkForWin()
})
topRightBox.addEventListener('click', ()=> {
    let x = topRightBox.querySelector('.x')
    let o = topRightBox.querySelector('.o')
    toggleTurn(x,o,[0,2]);
    checkForWin()
})
midLeftBox.addEventListener('click', ()=> {
    let x = midLeftBox.querySelector('.x')
    let o = midLeftBox.querySelector('.o')
    toggleTurn(x,o,[1,0]);
    checkForWin()
})
midMidBox.addEventListener('click', ()=> {
    let x = midMidBox.querySelector('.x')
    let o = midMidBox.querySelector('.o')
    toggleTurn(x,o,[1,1]);
    checkForWin()
})
midRightBox.addEventListener('click', ()=> {
    let x = midRightBox.querySelector('.x')
    let o = midRightBox.querySelector('.o')
    toggleTurn(x,o,[1,2]);
    checkForWin()
})
botLeftBox.addEventListener('click', ()=> {
    let x = botLeftBox.querySelector('.x')
    let o = botLeftBox.querySelector('.o')
    toggleTurn(x,o,[2,0]);
    checkForWin()
})
botMidBox.addEventListener('click', ()=> {
    let x = botMidBox.querySelector('.x')
    let o = botMidBox.querySelector('.o')
    toggleTurn(x,o,[2,1]);
    checkForWin()
})
botRightBox.addEventListener('click', ()=> {
    let x = botRightBox.querySelector('.x')
    let o = botRightBox.querySelector('.o')
    toggleTurn(x,o,[2,2]);
    checkForWin()
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