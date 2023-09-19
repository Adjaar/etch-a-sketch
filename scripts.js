const container = document.getElementsByClassName('gridContainer');

function makeGrid(numDivs) {
    for (let i = 0; i < numDivs; i++){
        let cells = document.createElement('div');
        cells.classList.add('grid');
        container.appendChild(cells);
    }
}

makeGrid(256);