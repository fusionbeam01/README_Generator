// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github user name.'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your application.'

        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'Apache', 'OSC'],
            message: 'Pick your license:'
        }
    ])
    .then(answers => {
    
            
    })

}

// Function call to initialize app
init();




//  prompt for information about my application repository -

// THEN a high-quality, professional README.md is generated
//   Title of Project 
    //displayed as title of the README
// sections entitled
//  - Description,
//  -  Table of Contents,
    // -when i click on each link I scroll to the corresponding section of the readme
//  -  Installation, 
//  - Usage,
//  -  License, 
        // -a badge is added near the top of the README
        // - a notice is added to the section of the README entitles license
            //  -explains which license th application is covered under
//   Contributing,
//  -  Tests, and
// -  Questions
    // - github username 
    // - link to github profile
    // - email address with instructions on how to reach me with additional questions





