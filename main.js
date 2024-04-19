
var currentPlayer;
var player1;
var player2;

function playerInfo(name, id, token) {
    var player = {
        name: name,
        id: id,
        token: token,
        wins: 0
    }
    return player
}

player1 = playerInfo('player 1', 1, 'X')
player2 = playerInfo('player 2', 2, 'O')


function addWin(winner) {
    winner.wins++
    return winner
}

function gameBoard() {
    return [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
}

function currentPlayersTurn(){
    if(currentPlayer === player1){
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
}


