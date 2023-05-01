// USE CLASS CONSTRUCTOR METHOD TO GENERATE SHAPES
// SHAPE CODE: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
// Chat GPT helped with the quick math to center my shapes on the 300 x 200 pixel canvas

// first define the overall class of 'shape' so that user input for question renders shape --> their preferred shape

class Shape {
  constructor() {
    this.color = '';
  }
}

class Circle extends Shape {
  render() {
    return '<circle cx = "150" cy = "100" r = "90" fill="${this.color}" />';
  }
};

class Square extends Shape {
  render() {
    return '<rect x="62.5" y="12.5" width="175" height="175" fill="${this.color}" />';
  }
};


class Triangle extends Shape {
  render() {
    return '<polygon points = "150, 18 244, 182 56, 182" fill = "${this.color}" />';
  }
}



// EXPORT SHAPES TO BE USED IN INDEX.JS
module.exports = { Circle, Square, Triangle }