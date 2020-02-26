import Snake from '../../src/Snake/Snake.js';

describe("snake", () => {
    test('has a default direction of right', () => {
        const snake = new Snake(null, null);

        expect(snake.direction).toBe("right");
    });
});