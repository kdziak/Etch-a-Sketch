function createGrid(k) {
    for (let i = 0; i < k; i++) {
        let container = document.getElementById('grid');
        let cell = document.createElement('div');
        cell.innerHTML = "TEXT";
        cell.classList = 'cell';
        container.appendChild(cell);
        
    }
}

createGrid(16);

const gridHolder = document.querySelector('#grid');
gridHolder.onmouseover =
    function() {
        console.log('it works');
    };


