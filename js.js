
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;


function handleMove(cellIndex) {
    if (gameActive && gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;
        if (checkWin()) {
            announceWinner();
            gameActive = false;
        } else if (checkDraw()) {
            announceDraw();
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}


function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winConditions.some((condition) => {
        return gameBoard[condition[0]] !== '' &&
            gameBoard[condition[0]] === gameBoard[condition[1]] &&
            gameBoard[condition[1]] === gameBoard[condition[2]];
    });
}


function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}


function announceWinner() {
    document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
}


function announceDraw() {
    document.getElementById('status').textContent = 'It\'s a draw!';
}


function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;

    
    const cells = document.getElementsByClassName('cell');
    Array.from(cells).forEach((cell) => {
        cell.textContent = '';
    });
}
