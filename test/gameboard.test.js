import { printGrid } from "../scripts/gameboard";
import { placeCharacter } from "../scripts/player";

test('returns empty gameboard after creation', () => {
    expect(printGrid).toEqual([
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-'],
    ]);
  });

  test('allows placing ship', () => {
    const board = printGrid(3);
    expect(placeCharacter(1,1)).toEqual([
      ['-', '-', '-'],
      ['-', 'O', '-'],
      ['-', '-', '-'],
    ]);
  });