import { printGrid } from "../scripts/gameboard";

test('returns empty gameboard after creation', () => {
    expect(printGrid).toEqual([
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-'],
    ]);
  });