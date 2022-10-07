// TODO: Include packages needed for this application
const assignment = require('./utils/generateMarkdown')
const inquire = require('inquirer')
const fs = require ('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'username',
        default: 'daniel-valean',
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'readme-generator',
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please include any installation instructions",
    },
    {
        type: "input",
        name:"usage",
        message: "Provide instructions and examples of how to us your project",
    },
    {
        type: "input",
        name: "contributing",
        message: "How could other developers contribute to your project?",
    },
    {
        type: "input",
        name: "tests",
        message: "Are there any tests writtin for your application? Please provide examples on how to run them.",
    },
    {
        type: "list",
        name:"license",
        message: "What company is your applicaions licensed under?",
        choices: ["MIT", "Apache", "Mozilla", "GNU"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md has been generated.")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt (questions) .then (data =>{
        fs.writeFileSync ("README2.md", assignment(data))
    })
}

// Function call to initialize app
init();
