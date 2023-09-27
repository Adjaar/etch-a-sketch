const resetBtn = document.getElementById('reset');
const sizeBtn = document.getElementById('size');
let gridSize = 256;

makeGrid(gridSize);

function makeGrid(numDivs) {
    const container = document.getElementById('gridContainer');
    container.innerHTML = '';

    for (let i = 0; i < numDivs; i++){
        let cells = document.createElement('div');
        cells.style.backgroundColor = "#fff";
         cells.classList.add('grid');
         cells.style.width = (100 / Math.sqrt(numDivs)) + "%";
         cells.style.height = (100 / Math.sqrt(numDivs)) + "%";
        container.appendChild(cells);
    }

    etchPen();
}

function etchPen() {
    const gridItems = document.querySelectorAll(".grid");
    gridItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "#000"; 
        });
    });   
}


resetBtn.addEventListener('click', () => {
    const gridItems = document.querySelectorAll(".grid");
    gridItems.forEach((item) => {
        item.style.backgroundColor = "#fff";
    });
});

sizeBtn.addEventListener('click', () => {
    let newSize;
    do {
        newSize = prompt("Enter the new grid size (e.g., 24 for 24x24, max is 100):");
    } while (newSize !== null && (!parseInt(newSize) || parseInt(newSize) <= 0 || parseInt(newSize) > 100));

    if (newSize !== null) {
        const numDivs = parseInt(newSize) ** 2; // Calculate the number of cells
        makeGrid(numDivs);
    }
})