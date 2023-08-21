const gridContainer = document.querySelector('#gridContainer');


for(let rowCounter = 0; rowCounter < 16; rowCounter ++){
    const gridRow = document.createElement('div');
    gridRow.classList.add('gridRow');
    //gridRow.textContent = 'row for grid';
    gridContainer.appendChild(gridRow);
    for (let columnCounter = 0; columnCounter < 16; columnCounter ++){
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('gridColumn');
        gridColumn.textContent = "column for grid";
        gridRow.appendChild(gridColumn);
        
    }

}