//constructor for ship pieces

function ship(length) {
  return {
    length: length,
    hits: 0,
    sunk: false,

  }

const ship_pieces = {
  p1: {
    carrier: ship(5),
    battleship: ship(4),
    cruiser: ship(3),
    submarine: ship(3),
    destroyer: ship(2)
  },

  p2: {
    carrier: ship(5),
    battleship: ship(4),
    cruiser: ship(3),
    submarine: ship(3),
    destroyer: ship(2)
  }
}
  function hit() {
    this.hits++;
    if (this.hits === this.length) {
      this.sunk = true;
    }
  }
  
  function isSunk() {
    return this.sunk;
  }
}
console.log(ship(5))

// export default ship, ship_pieces;
module.exports = {ship}

//isSunk() should be a function that calculates it based on 
//their length and the number of ‘hits’.


//rules for battleshoip
//Pieces: Carrier (5), Battleship (4), Cruiser (3), submarine(3),
//Destroyer (2),
//  can only be placed vertically or horizontally