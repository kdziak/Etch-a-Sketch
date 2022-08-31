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




//let input = window.prompt('how many squares?');


const btn = document.getElementById('userInputBtn').addEventListener
('click', getUserInput);

function getUserInput() {
    container.innerHTML = '';
    let input = window.prompt('How many squares?')
    createGrid(input);
}
