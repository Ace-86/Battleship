
const ship = require("../factories/shipFactory");

test('check health', () => {
    expect(ship.getHealth(Carrier, 5)).toMatch(5);
  });