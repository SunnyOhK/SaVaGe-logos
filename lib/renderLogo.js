const { Circle, Square, Triangle, Diamond } = require('./shapes');
const questions = require('./questions');


// CREATE A FUNCTION TO EXPORT SEPARATE SHAPE VARIABLES BASED ON THE USER'S ANSWER

function createShape(shape, shapeColor, text, textColor) {
  if (answer.shape == 'circle') {
    let logoShape = new Circle(answer.shapeColor, answer.text, answer.textColor);
    // return logoShape.render();
  }

  if (answer.shape == 'square') {
    let logoShape = new Square(answer.shapeColor, answer.text, answer.textColor);
    // return logoShape.render();
  }

  if (answer.shape == 'triangle') {
    let logoShape = new Triangle(answer.shapeColor, answer.text, answer.textColor);
    // return logoShape.render();
  }

  if (answer.shape == 'diamond') {
    let logoShape = new Diamond(answer.shapeColor, answer.text, answer.textColor);
    // return logoShape.render();
  }

  return logoShape;
}