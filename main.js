// Query Selectors
var player1Section = document.querySelector('.player-1')
var player2Section = document.querySelector('.player-2')
var gameTitle = document.querySelector('.game-title')
var cells = document.querySelectorAll('.cell')
var errorMssg = document.querySelector('.error-message')

// Global Variables
var currentPlayer;
var player1 = createPlayer('Player 1', 1, 'X')
var player2 = createPlayer('Player 2', 2, 'O')
var board;
var win = false;

//functions
function createPlayer(name, id, token) {
    return {
        name: name,
        id: id,
        token: token,
        wins: 0
    }
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
    winner.wins = winner.wins
    if (winner.token === 'X') {
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
    var cellIndex = Array.from(cells).indexOf(e.target);
    var col = Math.floor(cellIndex / 3);
    var row = cellIndex % 3;
    if (e.target.textContent) {
        errorMssg.innerText = 'Please select an empty square!';
    } else if (!win) {
        errorMssg.innerText = ''
        e.target.textContent = currentPlayer.token
        board[row][col] = currentPlayer.token
        checkForWin();
    }
    if (!win) {
        checkIfDraw();
    }
}

function checkForWin() {
    for (var i = 0; i < board.length; i++) {
        if (board[i][0] === currentPlayer.token && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            win = true
        }
    }
    for (var i = 0; i < board.length; i++) {
        if (board[0][i] === currentPlayer.token && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            win = true
        }
    }
    if (board[0][0] === currentPlayer.token && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        win = true
    }
    if (board[0][2] === currentPlayer.token && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        win = true
    }
    if (win) {
        gameTitle.innerText = `${currentPlayer.name} Wins!!!!`
        increasesWins(currentPlayer);
        setTimeout(resetGame, 3000);
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
        gameTitle.innerText = 'Its a draw!'
        setTimeout(resetGame, 3000)
    } else {
        currentPlayersTurn();
    }
}

function addEventListenerToCells() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', checkIfEmpty)
    }
}

function startGame() {
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
    gameBoard();
    setTimeout(addEventListenerToCells, 500);
}

function resetGame() {
    win = false
    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = ''
    }
    startGame()
}

startGame();
