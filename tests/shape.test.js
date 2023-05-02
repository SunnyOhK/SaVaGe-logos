// TEST PARENT SHAPE CLASS
const { Shape } = require('../lib/shapes');

test('shape has property shapeColor', () => {
  const example = new Shape('blue', 'AAS', 'red')
  expect(example.shapeColor).toBe('blue')
})

// --> TESTING FOR EACH CHILD CLASS OF SHAPE
const { Triangle } = require('../lib/shapes');

test('triangle will take the parent Shape class value for color', () => {
  const shape = new Triangle('black', 'ABC', 'white');
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="black" stroke="white"/>');
})


