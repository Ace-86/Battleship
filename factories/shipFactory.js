const shipType = (name, length) => {
    const health = length;
    const type  = name;

  const hit = () => {
//Ships should have a hit() function that 
//increases the number of ‘hits’ in your ship.
//when enemy attacks and hit, increase hit damage on ship 
//by 1
  }  



  const ifSunk = () => {
    if (health == 0) {
    //for each hit accumulated, decrease health by 1
    //when health reaches zero, "you sunk my battle ship"
    //ship is destroyed
    } else {

    }
    }

return {health, type}
}


module.exports = {shipType}

//isSunk() should be a function that calculates it based on 
//their length and the number of ‘hits’.


//rules for battleshoip
//Pieces: Carrier (5), Battleship (4), Cruiser (3), submarine(3),
//Destroyer (2),
//  can only be placed vertically or horizontally