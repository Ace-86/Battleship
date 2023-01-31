
const ship = require("../factories/shipFactory");
describe("Ship's Desription", () => {
test('check health', () => {
    expect(ship.shipType("ted", 5)).toEqual({"health": 5, "type": "ted"});
  });
})