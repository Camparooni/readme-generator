// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Provide installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should you project be used?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'No License'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how others can contribute to your project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for running tests:'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
