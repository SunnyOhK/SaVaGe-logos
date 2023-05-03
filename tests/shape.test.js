// Shape constructor(shapeColor, text, textColor)
const { Shape } = require('../lib/shapes.js');
const { Circle, Triangle, Square, Diamond } = require('../lib/shapes.js')

// TEST PARENT SHAPE CLASS
test('shape has property shapeColor', () => {
  const example = new Shape('blue', 'SUN', 'red')
  expect(example.shapeColor).toBe('blue')
})

// --> TESTING FOR EACH CHILD CLASS OF SHAPE
// Triangle: 'super' is used to invoke the parent class's constructor(shapeColor, text, textColor)

test('triangle will take the parent Shape class value for color', () => {
  const shape = new Triangle('black', 'ABC', 'white');
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="black"/>');
})

// Circle: 'super' is used to invoke the parent class's constructor(shapeColor, text, textColor)

test('circle will take the parent Shape class value for color', () => {
  const shape = new Circle('#AAC6D6', 'MnM', '3C4144');
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="#AAC6D6"/>');
})

// Square: 'super' is used to invoke the parent class's constructor(shapeColor, text, textColor)
test('square will take the parent Shape class value for color', () => {
  const shape = new Square('3C4144', 'SVG', 'AB94C1');
  expect(shape.render()).toEqual('<rect x="62.5" y="12.5" width="175" height="175" fill="3C4144"/>');
})

//Diamond: 'super' is used to invoke the parent class's constructor(shapeColor, text, textColor)
test('diamond will take the parent Shape class value for color', () => {
  const shape = new Diamond('pink', 'BRB', 'black');
  expect(shape.render()).toEqual('<rect x="62.5" y="12.5" width="175" height="175" transform="rotate(45, 100, 100)" fill="pink"/>');
})

//* - - - - - - - - - - - - - - - - - - - - - - - - -
// TEST THAT INVOKING SHAPE PARENT CLASS WILL PRODUCE EXPECTED RESULTS AMONGST SUB CLASSES
// Separating shape parameters still shows that test passes

describe('Triangle', () => {
  test('a new Triangle shape should inherit shapeColor, text, and textColor', () => {
    const triangle = new Triangle("#3C4144", "MnM", "#AAC6D6");
    expect(triangle.shapeColor).toEqual("#3C4144");
    expect(triangle.text).toEqual("MnM");
    expect(triangle.textColor).toEqual("#AAC6D6");
  })
})