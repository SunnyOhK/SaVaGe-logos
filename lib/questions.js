// NODE MODULE TO VALIDATE THE COLOR KEYWORD OR HEX CODE
const validateColor = require("validate-color").default;

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 characters for your logo text.',
    validate: function (answer) {
      if (answer.length > 3 || answer.length < 1) {
        console.log('You must enter between 1 and 3 characters.');
        return false;
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Input a text color (keyword or hex code accepted).',
    validate: function (answer) {
      if (!answer) {
        console.log('Response required.');
        return false;
      } else if (!validateColor) {
        console.log('Invalid color input. Please try again.');
        return false;
      } else {
        return true;
      }
    }
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select your preferred logo shape.',
    choices: ['circle', 'triangle', 'square', 'diamond']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Input a shape color (keyword or hex code accepted).',
    validate: function (answer) {
      if (!answer) {
        console.log('Response required.');
        return false;
      } else if (!validateColor) {
        console.log('Invalid color input. Please try again.');
        return false;
      } else {
        return true;
      }
    }
  }
];

module.exports = questions;