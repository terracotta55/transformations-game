import { Triangle } from './triangle.js'
import { evaluateMatch } from './evaluate.js'


test('evaluateMatch()', () => {
    const player = new Triangle(7, -6, 5, -8, 7, -8);
    const goal = new Triangle(7, -6, 5, -8, 7, -8);

    expect(evaluateMatch(player,goal)).toEqual(true);

    const player2 = new Triangle(-4, 3, -4, 1, -2, 1);
    const goal2 = new Triangle(7, -6, 5, -8, 7, -8);

    expect(evaluateMatch(player2, goal2)).toEqual(false);

    const player3 = new Triangle(7, -6, 5, -8, 7, -8);
    const goal3 = new Triangle(7, -8, 5, -8, 7, -6);

    expect(evaluateMatch(player3,goal3)).toEqual(true);
});
