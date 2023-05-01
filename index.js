const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = fs.promises;
const shapes = require('./lib/shapes');

// PROMPT AND ARRAY OF QUESTIONS IN ORDER TO GENERATE THE ELEMENTS REQUIRED TO CREATE SVG LOGO
const promptUser = () => {

  return inquirer.prompt([
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
      message: 'Input a text color (use keyword or hex code).',
      validate: function (answer) {
        if (!answer) {
          console.log('Response required.');
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
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Input a shape color (use keyword or hex code).',
      validate: function (answer) {
        if (!answer) {
          console.log('Response required.');
          return false;
        } else {
          return true;
        }
      }
    }
  ])
};

// WRITEFILE HAS BEEN IMPORTED FROM INQUIRER PROMISES
const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of a callback function
    .then((data) => writeFile('logo.svg', generateSVG(data)))
    .then(() => console.log('Generated logo.svg!'))
    .catch((err) => console.error(err));
};


init();