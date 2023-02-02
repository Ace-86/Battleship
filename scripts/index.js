let myGridSize = 5
let enemyGridSize = 5
let myGrid = createGrid(myGridSize);
let enemyGrid = createGrid(enemyGridSize)

//gameplay variables
let myShips = 5;
let enemyShips = 5;


// printGrid(enemyGrid, true)
// printGrid(myGrid)

//gameplay
for (let i = 1; i < 6; i++) {
    let x = prompt('enter y coordinate for your ship number' + i);
    let y = prompt('enter x coordinate for your ship number' + i);
    placeCharacter(x, y, 'O', myGrid);
}

printGrid(enemyGrid, true)
printGrid(myGrid)

// use an array of an array for board creation

function createGrid(size) {
    let grid = [];
    for (let i = 0; i < size; i++) {
        grid[i] = [];
        for (let j = 0; j < size; j++) {    
            grid[i][j] = "-";
        }
    }
    return grid;
}

function printGrid(grid, isEnemy = false) {
    const headers = createHeaders(grid.length);
    console.log(headers);
    for (let i = 0; i < grid.length ; i++) {
        let rowString = i  + ' ';
        for (let cell of grid[i]) {
            if( isEnemy && cell == "O") {
                rowString += '- ';
            } else {
                rowString += cell + "  ";
            }   
        }
        console.log(rowString)
    }
}

function createHeaders(size) {
    let result = "  ";
    for (let i = 0; i < size; i++) {
        result += i  +  '  ';
    }
    return result;
}

// function createRowHeaders(size) {
//     let result = "  ";
//     for (let j = 0; j < size; j++) {
//         result += i  +  '  ';
//     }
//     return result;
// }

function placeCharacter( x, y, c, grid) {
    grid[y][x] = c;
}