const shipType = (name, length) => {
    const health = length;
    const shipName  = name;

return {health, shipName}
}
console.log(shipType("Carrier", 5));

//rules for battleshoip
//Pieces: Carrier (5), Battleship (4), Cruiser (3), submarine(3),
//Destroyer (2),
//  can only be placed vertically or horizontally