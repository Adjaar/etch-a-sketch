const container = document.getElementById('gridContainer');

function makeGrid(numDivs) {
    for (let i = 0; i < numDivs; i++){
        let cells = document.createElement('div');
         cells.classList.add('grid');
         cells.style.width = (100 / Math.sqrt(numDivs)) + "%";
         cells.style.height = (100 / Math.sqrt(numDivs)) + "%";
         console.log("hi my name is, " + cells.style.width);
        container.appendChild(cells);
    }
}

makeGrid(256);