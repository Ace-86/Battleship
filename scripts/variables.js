//gameboard
import { createGrid } from './gameboard.js';

let myGridSize = 3
let enemyGridSize = 3
let myGrid = createGrid(myGridSize);
let enemyGrid = createGrid(enemyGridSize)
let enemyLocation = {}

export {myGridSize, myGrid, enemyGridSize, enemyGrid, enemyLocation}