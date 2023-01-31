const shipType = (name, length) => {
    const health = length;
    const type  = name;

return {health, type}
}

// const cruiser = shipType("cruiser", 3);

// console.log(cruiser);
module.exports = {shipType}


//rules for battleshoip
//Pieces: Carrier (5), Battleship (4), Cruiser (3), submarine(3),
//Destroyer (2),
//  can only be placed vertically or horizontally