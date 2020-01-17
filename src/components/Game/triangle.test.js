import { Triangle } from './triangle.js'

test('translate()', () => {
    const triangle = new Triangle(-5, 5, -5, 3, -3, 3);
    
    triangle.translate(2,-2);

    expect(triangle.a).toEqual({x: -3, y: 3});
    expect(triangle.b).toEqual({x: -3, y: 1});
    expect(triangle.c).toEqual({x: -1, y: 1});
});

test('rotate()', () => {
    const triangle = new Triangle(-4, 3, -4, 1, -2, 1);

    expect(triangle.a).toEqual({x: -4, y: 3});
    expect(triangle.b).toEqual({x: -4, y: 1});
    expect(triangle.c).toEqual({x: -2, y: 1});
    
    triangle.rotate(0, 0, 90);

    expect(triangle.a).toEqual({x: 3, y: 4});
    expect(triangle.b).toEqual({x: 1, y: 4});
    expect(triangle.c).toEqual({x: 1, y: 2});

    triangle.rotate(0, 0, -90);
    triangle.rotate(0, 0, -90);

    expect(triangle.a).toEqual({x: -3, y: -4});
    expect(triangle.b).toEqual({x: -1, y: -4});
    expect(triangle.c).toEqual({x: -1, y: -2});
});

test('reflect()', () => {
    const triangle = new Triangle(-4, 3, -4, 1, -2, 1);
    
    triangle.reflect("x");

    expect(triangle.a).toEqual({x: -4, y: -3});
    expect(triangle.b).toEqual({x: -4, y: -1});
    expect(triangle.c).toEqual({x: -2, y: -1});

    triangle.reflect("y");

    expect(triangle.a).toEqual({x: 4, y: -3});
    expect(triangle.b).toEqual({x: 4, y: -1});
    expect(triangle.c).toEqual({x: 2, y: -1});
});
