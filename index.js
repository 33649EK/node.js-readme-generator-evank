const fs = require("fs");
const inquirer = require("inquirer");

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
inquirer.prompt([
  {
    type: "input",
    message: "Please enter a description for your Readme file.",
    name: "Description",
  },
  {
    type: "input",
    message: "Please enter the installation instructions for your project.",
    name: "Installation",
  },
  {
    type: "input",
    message: "Please enter usage information for your project.",
    name: "Usage",
  },
  {
    type: "input",
    message: "Please enter your credits for all contributors.",
    name: "Contributions",
  },
  {
    type: "input",
    message: "Please enter test instructions for your project.",
    name: "Tests",
  },
  {
    type: "list",
    message: "Please choose a license for your project.",
    name: "License",
    choices: ["Apache", "MIT", "ISC", "GNU GPLv3", "None"],
  },
  {
    type: "input",
    message: "Please enter your GitHub username.",
    name: "GitHub",
  },
  {
    type: "input",
    message: "Please enter your email address.",
    name: "Email",
  },
]);
