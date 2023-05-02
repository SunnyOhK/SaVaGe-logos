// USE CLASS CONSTRUCTOR METHOD TO GENERATE SHAPES
// SHAPE CODE: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
// Chat GPT helped with the quick math to center my shapes on the 300 x 200 pixel canvas

// first define the overall class of 'shape' so that user input for question renders shape --> their preferred shape
// SVG Class --> Shape Class! 

class Shape {
  constructor(shapeColor, text, textColor) {
    this.color = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
}

class Circle extends Shape {
  render() {
    return '<circle cx = "150" cy = "100" r = "90" />';
  }
};

class Square extends Shape {
  render() {
    return '<rect x="62.5" y="12.5" width="175" height="175" />';
  }
};

class Triangle extends Shape {
  render() {
    return '<polygon points = "150, 18 244, 182 56, 182" />';
  }
};

class Diamond extends Shape {
  render() {
    return '<rect x="62.5" y="12.5" width="175" height="175" transform="rotate(45, 100, 100)" />';
  }
}


// CREATE A FUNCTION TO EXPORT SEPARATE SHAPE VARIABLES BASED ON THE USER'S ANSWER

function createShape() {
  if (answer.shape == 'circle') {
    let logoShape = new Circle (answer.shapeColor, answer.text, answer.textColor);
    return logoShape.render();
  }

  if (answer.shape == 'square') {
    let logoShape = new Square (answer.shapeColor, answer.text, answer.textColor);
    return logoShape.render();
  }

  if (answer.shape == 'triangle') {
    let logoShape = new Triangle (answer.shapeColor, answer.text, answer.textColor);
    return logoShape.render();
  }

  if (answer.shape == 'diamond') {
    let logoShape = new Diamond (answer.shapeColor, answer.text, answer.textColor);
    return logoShape.render();
  }
}

// EXPORT SHAPES TO BE USED IN INDEX.JS
module.exports = createShape;