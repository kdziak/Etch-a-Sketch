const container = document.getElementById('grid');
const cells = document.getElementsByClassName('cell');

function createGrid(k) {
    for (let i = 0; i < k; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        
        container.appendChild(cell);
        cell.onmouseover = function() {
            this.style.backgroundColor = 'black';
        };
    };
};

createGrid(16);



