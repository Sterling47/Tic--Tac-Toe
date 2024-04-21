// Query Selectors
var mainSection = document.querySelector('.mainboard-section')
var game_Board = document.querySelector('board-box') 
var player1Section = document.querySelector('.player-1')
var player2Section = document.querySelector('.player-2')
var gameTitle = document.querySelector('.game-title')
var cells = document.querySelectorAll('.cell')


// Global Variables
var currentPlayer;
var player1;
var player2;
var board;

//Event Listeners


//functions
function createPlayer(name, id, token) {
    var player = {
        name: name,
        id: id,
        token: token,
        wins: 0
    }
    return player
}

function gameBoard() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
}

function addWin(winner) {
    winner.wins++
    player1Section.innerHTML = `
    <h2 class="p1-header">player 1</h2>
    <h2 class="p1=score">${winner.wins}</h2>
    `
}

function currentPlayersTurn() {
    if (currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
    gameTitle.innerText = `${currentPlayer.name} turn!`
}

function checkIfEmpty(e){
 if(!e.target.textContent){
    e.target.textContent = currentPlayer.token
    currentPlayersTurn();
 } else {
    alert('pick a empty cell')
 }
}

