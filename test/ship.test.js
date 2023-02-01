
const ship = require("../factories/shipFactory");
describe("Ship's Desription", () => {
test('check health', () => {
    expect(ship.ship("ted", 5)).toEqual({"health": 5, "type": "ted"});
  });
  test('check if hit', () => {
    expect(ship.hit("X")).toMatch("enemy hit");
  })
})