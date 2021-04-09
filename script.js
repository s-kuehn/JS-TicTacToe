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

const winnerText = document.querySelector('#winner');

const boxes = [topLeftBox, topMidBox, topRightBox, midLeftBox,
    midMidBox, midRightBox, botLeftBox, botMidBox, botRightBox]

let isXTurn = true;
let gameOver = false;

let player = 'x'

function toggleTurn (x,o,location) {
    if (x.style.display !== 'block' && o.style.display !== 'block') {
        if (isXTurn) {
            board[location[0]][location[1]] = 'x'
            x.style.display = 'block';
            o.style.display = 'none';
            checkForWin(player)
            isXTurn = false;
            player = 'o';
           } else {
            board[location[0]][location[1]] = 'o'
            o.style.display = 'block';
            x.style.display = 'none';
            checkForWin(player)
            isXTurn = true;
            player = 'x';
           }
    }
}

let board = [
    ['','',''],
    ['','',''],
    ['','',''],
]

const locations = [
    [0,0],
    [0,1],
    [0,2],
    [1,0],
    [1,1],
    [1,2],
    [2,0],
    [2,1],
    [2,2],
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


function checkForWin(player) {
    console.log(player)
    for (let i = 0; i<winningConditions.length; i++) {

        if (board[winningConditions[i][0][0]][winningConditions[i][0][1]] === player &&
        board[winningConditions[i][1][0]][winningConditions[i][1][1]] === player &&
        board[winningConditions[i][2][0]][winningConditions[i][2][1]] === player){

            gameOver = true;
            winnerText.textContent = `${player.toUpperCase()}'s`;
            console.log(`${player}'s win!`);
            break;

        }
    }

    if (!gameOver) {
        if (board[0][0].length > 0 && board[0][1].length > 0 && board[0][2].length > 0 &&
            board[1][0].length > 0 && board[1][1].length > 0 && board[1][2].length > 0 &&
            board[2][0].length > 0 && board[2][1].length > 0 && board[2][2].length > 0) {
    
            gameOver = true;
            winnerText.textContent = `TIE`;
            console.log("It's a tie!")
        }
    }
}

// Click Listeners
for (let box = 0; box<boxes.length; box++) {
    boxes[box].addEventListener('click', () => {
        if (gameOver === false) {
            console.log(gameOver)
            let x = boxes[box].querySelector('.x')
            let o = boxes[box].querySelector('.o')
            toggleTurn(x,o,locations[box]);
            // checkForWin(player)
        }
    })
}

document.querySelector('.new-game').addEventListener('click', ()=> {
    for (let i = 0; i<boxes.length; i++) {
        boxes[i].querySelector('.x').style.display = 'none'
        boxes[i].querySelector('.o').style.display = 'none'
    }
    board = [
        ['','',''],
        ['','',''],
        ['','',''],
    ]
    winnerText.textContent = '';
    gameOver = false;
})