const gridContainer = document.querySelector('#gridContainer');


for(let counter = 0; counter < 16; counter ++){
    const gridRow = document.createElement('div');
    gridRow.classList.add('gridRow');
    gridRow.textContent = 'row for grid';
    gridContainer.appendChild(gridRow);

}