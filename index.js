//NODE PACKAGES: INQUIRER FOR QUESTION PROMPTS, VALIDATE COLOR FOR COLOR INPUT
const inquirer = require('inquirer');
// const validateColor = require('validate-color');

const fs = require('fs');
// const { writeFile } = fs.promises;

// Import questions from questions.js
const questions = require('./lib/questions.js');

// Import shape classes from shapes.js and define each shape
const createShape = require('./lib/shapes.js');


// DEFINE 'PROMPTUSER' AS ARRAY OF QUESTIONS THAT WILL GENERATE SVG LOGO
const promptUser = () => {
  return inquirer.prompt(questions);
};

// WRITEFILE HAS BEEN IMPORTED FROM INQUIRER PROMISES
const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of a callback function
    
    .then((answers) => fs.writeFile('./examples/logo.svg', createShape(answers)))
    .then(() => console.log('Generated logo.svg!'))
    .catch((err) => console.error(err));
};


init();