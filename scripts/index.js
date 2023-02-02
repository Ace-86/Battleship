//gameboard

let myGridSize = 3
let enemyGridSize = 3
let myGrid = createGrid(myGridSize);
let enemyGrid = createGrid(enemyGridSize)

//gameplay variables
let myShips = 2;
let enemyShips = 2;
let enemyLocation = {}


//Players place ships; player 1 selects location of ships; enemy uses random select to place character
for (let i = 1; i < 3; i++) {
    let x = prompt('enter y coordinate for your ship number' + i);
    let y = prompt('enter x coordinate for your ship number' + i);
    placeCharacter(x, y, 'O', myGrid);
    placeRandomCharacter('O', enemyGrid, enemyGridSize)    
    printGrid(enemyGrid, true)
    printGrid(myGrid)
}


//while loop will continue until a players ships = 0/ main gameplay loop
while (enemyShips > 0 && myShips > 0) {
    //ask player 1 to enter coordinates on board for attack; 
    let x = prompt('Enter the x coordinate for your attack'); //local variables
    let y = prompt('Enter the y coordinate for your attack'); //local variables

    //player 1 attack turn
        if(attack(x, y, enemyGrid)) {
            enemyShips--; //if hit, decrease enemy ships by 1
        } 

    //enemy attack turn/ picks random coordinates 
            x = getRandomInt(myGridSize); 
            y = getRandomInt(myGridSize);
        if (enemyShips > 0 && attack(x, y, myGrid)) { //if enemy still has ships and attack lands
            myShips--; //decrease player 1 ships by 1
        }
        
        drawbreak();   //visual shows the break between board changes every move     
        //prints updated grid
        printGrid(enemyGrid, true);
        printGrid(myGrid);
}


//Determines winner, prints win or lose
if (myShips < enemyShips) {
    console.log('Lose')
} else {
    console.log('victory')
}

// array of an array for board creation
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


//will print gameboard grid for both players
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

//create board headers that allow easier time picking coordinates; shows numbered rows and columns
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


//enemy placing random ships, coordinates are randomized from getRandomInt
function placeRandomCharacter(c , grid, max) {
    //prevent enemy from placing ship in same location
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

//gameplay function allowing enemy to place ships and attack randomly

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

// attack function for player 1
function attack(x, y, grid) {
    if ( grid[y][x] == 'O') {
        grid[y][x] = '!';
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

// visual break after each board change instance
function drawbreak() {
    console.log('------------------------------------')
}
