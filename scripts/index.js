let myGridSize = 5
let enemyGridSize = 5
let myGrid = createGrid(myGridSize);
let enemyGrid = createGrid(enemyGridSize)

//gameplay variables
let myShips = 2;
let enemyShips = 2;
let enemyLocation = {}

// printGrid(enemyGrid, true)
// printGrid(myGrid)

//gameplay
for (let i = 1; i < 3; i++) {
    let x = prompt('enter y coordinate for your ship number' + i);
    let y = prompt('enter x coordinate for your ship number' + i);
    placeCharacter(x, y, 'O', myGrid);
    placeRandomCharacter('O', enemyGrid, enemyGridSize)    
    printGrid(enemyGrid, true)
    printGrid(myGrid)
}

while (enemyShips > 0 && myShips > 0) {
    //game will place as long as enemy and my ships are greater than 0; 
    let x = prompt('Enter the x coordinate for your attack'); //local variables
    let y = prompt('Enter the y coordinate for your attack'); //local variables

        if(attack(x, y, enemyGrid)) {
            enemyShips--;
        } 
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

function placeRandomCharacter(c , grid, max) {
    //dont place ship in same location
    let didPlace = false;
    while(!didPlace) {
        let x = getRandomInt(max);
        let y = getRandomInt(max)
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


function attack(x, y, grid) {
    if ( grid[y][x] == 'O') {
        grid[y][x] == '!';
        return true;
        // attack function returns a boolean
    } else if (grid[y][x] == '-') {
        grid[y][x] = 'x';
        return false;
        //no hit; missed attack
    }else {
        return false//no new ship has been hit
    }
}