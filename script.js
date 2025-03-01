const board = document.getElementById('board')
const live = document.getElementById('status')
const resetBtn = document.getElementById('reset-btn')

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

for(i = 0; i < 9; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('data-index', i);
    cell.addEventListener('click', handleCellClick);
    board.appendChild(cell);
}

function  handleCellClick(e){
    const index = e.target.getAttribute('data-index');

    if (gameBoard[index] !== '' || !gameActive) return;

    gameBoard[index] = currentPlayer;
    console.log(gameBoard);
    
    e.target.textContent = currentPlayer;

    if(checkWinner()){
        live.textContent = 'player ' + currentPlayer + ' wins!';
        gameActive = false;
        return;
    }

    if(checkDraw()){
        live.textContent = "its a draw"
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    live.textContent = 'player ' + currentPlayer + " 's turn";
}

function checkWinner(){
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
     return winningCombos.some(combo => {
        return combo.every(index => 
            gameBoard[index] === currentPlayer
        );
     });
}

function checkDraw(){
    return gameBoard.every(cell => cell !== '')
}

resetBtn.addEventListener('click', () =>{
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = 'X'
    live.textContent = "player  X's  turn";

    document.querySelectorAll('.cell').forEach(cell =>{
        cell.textContent = '';
    })
})