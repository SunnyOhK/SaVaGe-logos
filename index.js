//NODE PACKAGES: INQUIRER FOR QUESTION PROMPTS, VALIDATE COLOR FOR COLOR INPUT
const inquirer = require('inquirer');
// const validateColor = require('validate-color');

const {writeFile} = require('fs/promises');
// const { writeFile } = fs.promises;

// Import questions from questions.js
const questions = require('./lib/questions.js');
// Import shape classes from shapes.js and define each shape
const {Circle,Square,Triangle,Diamond} = require("./lib/shapes.js")

// WRITEFILE HAS BEEN IMPORTED FROM INQUIRER PROMISES
const init = () => {
  inquirer.prompt(questions)
    .then((answer) => {
      var userShape;
      switch (answer.shape) {
        case 'circle':
          userShape = new Circle(answer.shapeColor, answer.text, answer.textColor);
          break;
        case 'square':
          userShape = new Square(answer.shapeColor, answer.text, answer.textColor);
          break;
        case 'triangle':
          userShape = new Triangle(answer.shapeColor, answer.text, answer.textColor);
          break;
        case 'diamond':
          userShape = new Diamond(answer.shapeColor, answer.text, answer.textColor);
          break;

        default:
          break;
      }
      writeFile('./examples/logo.svg', userShape.renderSVG())
    })
    .then(() => console.log('Generated logo.svg!'))
    .catch((err) => console.error(err));
};


init();