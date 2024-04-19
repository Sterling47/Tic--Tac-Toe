
var cells = []

function playerInfo(name, id, token) {
    var player = {
        name: name,
        id: id,
        token: token,
        wins: 0
    }
    return player
}

var player1 = playerInfo('player 1', 1, 'X')

var player2 = playerInfo('player 2', 2, 'O')


function addWin(winner) {
    winner.wins++
    return winner
}


