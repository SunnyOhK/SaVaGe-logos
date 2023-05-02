// USE CLASS CONSTRUCTOR METHOD TO GENERATE SHAPES
// SHAPE CODE: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

// ALL SHAPES WILL TAKE THE VALUE OF CLASS SHAPE (SHAPECOLOR, TEXT, TEXTCOLOR BASED ON USER INPUT)
// B/c the text and text color will remain consistent based on user response across all shapes, I can input svg for text input into class Shape
// The only thing that will need to change is the svg shape code for each unique shape

class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
  renderText() {
    return `<text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  } 
  renderSVG(){
    return `<svg width="300" height="200" version="1.1"  xmlns="http://www.w3.org/2000/svg">
    ${this.render()}
    ${this.renderText()}
    </svg>`
  }
}

class Circle extends Shape {
  constructor(shapeColor,text,textColor){
    super(shapeColor,text,textColor)
  }
  render() {
    return `<circle cx = "150" cy = "100" r = "100" fill="${this.shapeColor}" stroke="${this.textColor}"/>`;
  }
};

class Square extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor)
  }
  render() {
    return `<rect x="62.5" y="12.5" width="175" height="175" fill="${this.shapeColor}" stroke="${this.textColor}"/>`;
  }
};

class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor)
  }
  render() {
    return `<polygon points = "150, 18 244, 182 56, 182" fill="${this.shapeColor}" stroke="${this.textColor}" />`;
  }
};

class Diamond extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor)
  }
  render() {
    return `<rect x="62.5" y="12.5" width="175" height="175" transform="rotate(45, 100, 100)" fill="${this.shapeColor}" stroke="${this.textColor}"/>`;
  };
};



// EXPORT SHAPES TO BE USED IN INDEX.JS
module.exports = { Circle, Square, Triangle, Diamond };