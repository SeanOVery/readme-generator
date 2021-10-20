// TODO: Include packages needed for this application
  const inquirer = require('inquirer');
  const fs = require('fs');
  const markdown = require('./utils/generateMarkdown');
  let data,
    fileName
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'GitHub username: ',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Email: ',
    name: 'email',
  },
  {
    type: 'input',
    message: 'Title for your project:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Description of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Installation instructions for your project: ',
    name: 'install',
  },
  {
    type: 'input',
    message: 'Usage instructions for your project: ',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Contribution information for your project: ',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Testing information for your project: ',
    name: 'tests',
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: [
      'MIT',
      'Apache',
      'GPL',
      'ISC',
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, markdown.generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('README Created!')
);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(response => {
      data = response
      console.log(data)
      fileName = `${data.title}-README.MD`
      writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();
