//gameboard
import { createGrid } from './gameboard.js';

let myGridSize = 3
let enemyGridSize = 3
let myGrid = createGrid(myGridSize);
let enemyGrid = createGrid(enemyGridSize)

//gameplay variables
// let myShips = 2;
// let enemyShips = 2;
let enemyLocation = {}

export {myGridSize, myGrid, enemyGridSize, enemyGrid, enemyLocation}