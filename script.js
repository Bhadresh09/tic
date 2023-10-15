document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const cells = document.querySelectorAll("[data-cell]");
    const status = document.getElementById("status");
    const restartButton = document.getElementById("restart-button");
    const playerXWins = document.getElementById("playerXWins");
    const playerOWins = document.getElementById("playerOWins");

    let currentPlayer = "X";
    let gameActive = true;
    let xWins = 0;
    let oWins = 0;

    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkWinner = () => {
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (cells[a].dataset.cell === currentPlayer && cells[b].dataset.cell === currentPlayer && cells[c].dataset.cell === currentPlayer) {
                gameActive = false;
                status.textContent = `${currentPlayer} wins!`;
                updateScore(currentPlayer);
            }
        }
    };

    const checkDraw = () => {
        if ([...cells].every(cell => cell.dataset.cell === "X" || cell.dataset.cell === "O")) {
            gameActive = false;
            status.textContent = "It's a draw!";
        }
    };

    const handleCellClick = (e) => {
        const cell = e.target;
        if (cell.dataset.cell || !gameActive) return;

        cell.dataset.cell = currentPlayer;
        cell.textContent = currentPlayer;
        checkWinner();
        checkDraw();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    };

    const handleRestartClick = () => {
        cells.forEach(cell => {
            cell.dataset.cell = "";
            cell.textContent = "";
        });
        currentPlayer = "X";
        gameActive = true;
        status.textContent = "";
    };

    const updateScore = (player) => {
        if (player === "X") {
            xWins++;
            playerXWins.textContent = xWins;
        } else if (player === "O") {
            oWins++;
            playerOWins.textContent = oWins;
        }
    };

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    restartButton.addEventListener("click", handleRestartClick);
});
