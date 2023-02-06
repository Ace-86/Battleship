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

export { attack }