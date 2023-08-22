const gridContainer = document.querySelector('#gridContainer');
const dimensionButton = document.querySelector('#gridDimension');
let gridDimension = 16;

dimensionButton.addEventListener('click',function(){
    let dimension = parseInt(prompt("Please enter a number for the grid dimension (max 100)","16"));
    //console.log(dimension);
    if (dimension < 100){
        gridDimension = dimension;
        console.log(gridDimension);
        renderSketchPad();
        //return gridDimension;

    }else{
        

    }

});


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


/*
function toggleGridColor(){
    gridColumn.classList.toggle('gridColumnHover');
}
*/


/*
function changeDimension(){
    let dimension = prompt("Please enter a number for the grid dimension (max 100)","16");

    if (parseInt(dimension) < 100){

        gridDimension = parseInt(dimension);
        return gridDimension;

    }else{
        

    }
    
}
*/

function renderSketchPad(){
    removeAllChildNodes(gridContainer);
    for(let rowCounter = 0; rowCounter < gridDimension; rowCounter ++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        //gridRow.textContent = 'row for grid';
        gridContainer.appendChild(gridRow);
        for (let columnCounter = 0; columnCounter < gridDimension; columnCounter ++){
            const gridColumn = document.createElement('div');
            gridColumn.classList.add('gridColumn');
            gridColumn.textContent = "column for grid";
            gridRow.appendChild(gridColumn);
            //gridColumn.addEventListener('mouseover',toggleGridColor);
            
            gridColumn.addEventListener('mouseover', function(){
                gridColumn.classList.add('gridColumnHover');
    
            })
            /*
            gridColumn.addEventListener('mouseout', function(){
                gridColumn.classList.toggle('gridColumnHover');
    
            })
            */
    
            
        }
    

}
}

renderSketchPad();