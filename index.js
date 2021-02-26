// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
    default: "Project Title",
  },
  {
    type: "input",
    name: "description",
    message: "Description explaining the what, why, and how:",
    default: "Description",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    default: "Installation",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use:",
    default: "Usage",
  },
  {
    type: "input",
    name: "collaborators",
    message: "List your collaborators:",
    default: "Collaborators",
  },
  {
    type: "input",
    name: "test",
    message: "Testing instructions:",
    default: "Tests",
  },
  {
    type: "list",
    name: "license",
    message: "Choose your license type:",
    choices: ["Apache 2.0", "GNU 3.0", "MIT", "Mozilla", "None"],
    default: "MIT",
  },
  {
    type: "input",
    name: "github",
    message: "Github Username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (error) {
    if (error) {
      return console.log(error);
    }
    console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
