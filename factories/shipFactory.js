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
