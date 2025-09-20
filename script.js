let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset');
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleBoxClick(event) {
    const box = event.target;
    const boxIndex = Array.from(boxes).indexOf(box);
    if (gameState[boxIndex] !== '' || !gameActive) {
        return;
    }
    gameState[boxIndex] = currentPlayer;
    box.textContent = currentPlayer;
    checkResult();
}
function checkResult() {
    let roundWon = false;  
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        alert(`Player ${currentPlayer} wins!`);
        gameActive = false;
        return;
    }
    if (!gameState.includes('')) {
        alert('Game ended in a draw!');
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    boxes.forEach(box => box.textContent = '');
}
boxes.forEach(box => box.addEventListener('click', handleBoxClick));
resetButton.addEventListener('click', resetGame);

