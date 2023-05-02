// USE CLASS CONSTRUCTOR METHOD TO GENERATE SHAPES
// SHAPE CODE: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

// ALL SHAPES WILL TAKE THE VALUE OF CLASS SHAPE (SHAPECOLOR, TEXT, TEXTCOLOR BASED ON USER INPUT)
// B/c the text and text color will remain consistent based on user response across all shapes, I can input svg for text input into class Shape
// The only thing that will need to change is the svg shape code for each unique shape

class Shape {
  constructor(shapeColor, text, textColor) {
    this.color = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
  renderText() {
    return `<text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  } 
}

class Circle extends Shape {
  render() {
    return `<circle cx = "150" cy = "100" r = "90" fill="${this.color} stroke="${this.textColor}>${this.text}</circle>`;
  }
};

class Square extends Shape {
  render() {
    return `<rect x="62.5" y="12.5" width="175" height="175" fill="${this.color}stroke="${this.textColor}>${this.text}</rect>`;
  }
};

class Triangle extends Shape {
  render() {
    return `<polygon points = "150, 18 244, 182 56, 182" fill="${this.color}stroke="${this.textColor}>${this.text}</polygon>`;
  }
};

class Diamond extends Shape {
  render() {
    return `<rect x="62.5" y="12.5" width="175" height="175" transform="rotate(45, 100, 100)" fill="${this.color}stroke="${this.textColor}>${this.text}</rect>`;
  }
};



// EXPORT SHAPES TO BE USED IN INDEX.JS
module.exports = { Circle, Square, Triangle, Diamond };