// Query Selectors
var player1Section = document.querySelector('.player-1')
var player2Section = document.querySelector('.player-2')
var gameTitle = document.querySelector('.game-title')
var cells = document.querySelectorAll('.cell')
var errorMssg = document.querySelector('.error-message')

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
    errorMssg.innerText = '';
 if(!e.target.textContent){
    e.target.textContent = currentPlayer.token
    currentPlayersTurn();
 } else {
    errorMssg.innerText = 'Please select an empty square'
 }
}

function displayPlayersTurn(){
    for(var i = 0; i < cells.length; i++){
       cells[i].addEventListener('click', checkIfEmpty) 
    }
}

function startGame() {
    player1 = createPlayer('player 1', 1, 'X')
    player2 = createPlayer('player 2', 2, 'O')
    currentPlayer = player1;
    gameTitle.innerText = `${currentPlayer.name} turn!`
    displayPlayersTurn();
}

startGame();