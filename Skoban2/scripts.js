document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('gameBoard');
    let playerPosition = { x: 0, y: 0 };
    const level = [
        ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
        ['W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W'],
        ['W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W'],
        ['W', ' ', 'W', 'W', 'W', 'B', 'T', ' ', 'W'],
        ['W', ' ', 'P', ' ', ' ', ' ', ' ', 'W', 'W'],
        ['W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W'],
        ['W', ' ', ' ', 'B', 'T', ' ', ' ', 'W', 'W'],
        ['W', ' ', ' ', 'B', 'T', ' ', ' ', 'W', 'W'],
        ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],

    ];

    function renderBoard() {
        board.innerHTML = '';
        level.forEach((row, y) => {
            row.forEach((cell, x) => {
                const div = document.createElement('div');
                div.classList.add('tile');
                if (cell === 'W') div.classList.add('wall');
                if (cell === 'B') div.classList.add('box');
                if (cell === 'P') {
                    div.classList.add('player');
                    playerPosition = { x, y };
                }
                if (cell === 'T') div.classList.add('target');
                board.appendChild(div);
            });
        });
    }

    function checkForVictory() {
        let victory = true;
        for (let y = 0; y < level.length; y++) {
            for (let x = 0; x < level[y].length; x++) {
                if (level[y][x] === 'T') {
                    victory = false;
                    break;
                }
            }
        }

        if (victory) {
            setTimeout(() => {
                alert("Congratulations!");
            }, 10);
        }
    }

    function canMoveTo(x, y, dx, dy){
        if (x < 0 || y < 0 || x >= level[0].length || y >= level.length) {
            return false;
        }
        const targetCell = level[y][x];

        if (targetCell === 'B') {
            const beyondX = x + dx;
            const beyondY = y + dy;
            if (beyondX < 0 || beyondY < 0 || beyondX >= level[0].length || beyondY >= level.length) {
                return false;
            }
            const beyondCell = level[beyondY][beyondX];
            return beyondCell === ' ' || beyondCell === 'T';
        }
        return targetCell !== 'W';
    }


    function handleMovement(dx, dy) {
        const newX = playerPosition.x + dx;
        const newY = playerPosition.y + dy;
    
        if (canMoveTo(newX, newY, dx, dy)) {
            const targetCell = level[newY][newX];
    
            if (targetCell === 'B') {
                const boxNewX = newX + dx;
                const boxNewY = newY + dy;
                level[boxNewY][boxNewX] = 'B';
            }
            level[playerPosition.y][playerPosition.x] = ' ';
            playerPosition.x = newX;
            playerPosition.y = newY;
            level[newY][newX] = 'P';
            renderBoard();
            checkForVictory();
        }
    }
    


    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowUp':
                handleMovement(0, -1); // Move up (decrease y)
                break;
            case 'ArrowDown':
                handleMovement(0, 1); // Move down (increase y)
                break;
            case 'ArrowLeft':
                handleMovement(-1, 0); // Move left (decrease x)
                break;
            case 'ArrowRight':
                handleMovement(1, 0); // Move right (increase x)
                break;
        }
    });
    
    
    renderBoard();
});
