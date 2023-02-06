import { myGridSize, myGrid, enemyGridSize, enemyGrid } from './variables.js';
import { printGrid } from './gameboard.js'
import { placeCharacter } from './player.js';
import { placeRandomCharacter, getRandomInt } from './enemy.js'
import { attack } from './attack.js'

// //gameplay variables
let myShips = 2;
let enemyShips = 2;

//Players place ships; player 1 selects location of ships; enemy uses random select to place character
for (let i = 1; i < 3; i++) {
    let x = prompt('enter y coordinate for your ship number' + i);
    let y = prompt('enter x coordinate for your ship number' + i);
    placeCharacter(x, y, 'O', myGrid);
    placeRandomCharacter('O', enemyGrid, enemyGridSize);    
    printGrid(enemyGrid, true);
    printGrid(myGrid);
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

// visual break after each board change instance
function drawbreak() {
    console.log('------------------------------------')
}

export {placeCharacter}