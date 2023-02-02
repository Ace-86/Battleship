let myGridSize = 5
let enemyGridSize = 5
let myGrid = createGrid(myGridSize);
let enemyGrid = createGrid(enemyGridSize)

//gameplay variables
let myShips = 5;
let enemyShips = 5;
let enemyLocation = {}

// printGrid(enemyGrid, true)
// printGrid(myGrid)

//gameplay
for (let i = 1; i < 6; i++) {
    let x = prompt('enter y coordinate for your ship number' + i);
    let y = prompt('enter x coordinate for your ship number' + i);
    placeCharacter(x, y, 'O', myGrid);
    placeRandomCharacter('O', enemyGrid, enemyGridSize)    
    printGrid(enemyGrid, true)
    printGrid(myGrid)
}

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


// place ship (GAMEPLAY)
function placeCharacter( x, y, c, grid) {
    grid[y][x] = c;
}

function palceRandomCharacter(c , grid, max) {
    //dont place ship in same location
    let didPlace = false;
    while(!didPlace) {
        let x = getRandomInt(max);
        let y = getRandomInt(min)
        if (!enemyLocation[`${x}-${y}`]) {
        placeCharacter(x, y, c, grid);
        didPlace = true;
        enemyLocation[`${x}-${y}`] = true;
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}


