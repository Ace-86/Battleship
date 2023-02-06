import {enemyLocation } from './variables.js';
import {placeCharacter} from './index.js'


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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

export {placeRandomCharacter, getRandomInt}