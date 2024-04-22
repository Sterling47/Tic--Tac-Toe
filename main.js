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

function increasesWins(winner) {
    winner.wins++
    if(winner.token === 'X'){
        player1Section.innerHTML = `
    <h2 class="p1-header">player 1</h2>
    <h3> Wins: ${player1.wins} </h3>
    `
    } else {
        player2Section.innerHTML = `
    <h2 class="p2-header">player 2</h2>
    <h3> Wins: ${player2.wins} </h3>
    `
    }
}

function currentPlayersTurn() {
    if (currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
    gameTitle.innerText = `${currentPlayer.name} turn!`
}

function checkIfEmpty(e) {
    errorMssg.innerText = '';
    var cellIndex = Array.from(cells).indexOf(e.target);
    var col = Math.floor(cellIndex / 3);
    var row = cellIndex % 3;

    if (!e.target.textContent) {
        e.target.textContent = currentPlayer.token
        board[row][col] = currentPlayer.token
        checkIfDraw();
        console.log(board)
    } else {
        errorMssg.innerText = 'Please select an empty square'
    }
}

function checkIfDraw() {
    var draw = true;
    for (var i = 0; i < cells.length; i++) {
        if (!cells[i].textContent) {
            draw = false
        }
    }
    if (draw) {
       gameTitle.innerText ='Its a draw!' 
       setTimeout(resetGame, 3000)
    } else {
        currentPlayersTurn()
    }
}

function displayPlayersTurn() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', checkIfEmpty)
    }
}

function startGame() {  
    player1 = createPlayer('player 1', 1, 'X')
    player2 = createPlayer('player 2', 2, 'O')
    currentPlayer = player1;
    gameTitle.innerText = `${currentPlayer.name} turn!`
    player1Section.innerHTML = `
    <h2 class="p1-header">player 1</h2>
    <h3> Wins: ${player1.wins} </h3>
    `
    player2Section.innerHTML = `
    <h2 class="p2-header">player 2</h2>
    <h3> Wins: ${player2.wins} </h3>
    `
    displayPlayersTurn();
    gameBoard();
}

function resetGame() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = ''
    }
    gameBoard();
    gameTitle.innerText = `${currentPlayer.name} turn!`
}

startGame();


