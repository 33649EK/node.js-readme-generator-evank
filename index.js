const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter a title for your Readme file.",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "Please enter a description for your Readme file.",
      name: "description",
    },
    {
      type: "input",
      message: "Please enter the installation instructions for your project.",
      name: "installation",
    },
    {
      type: "input",
      message: "Please enter usage information for your project.",
      name: "usage",
    },
    {
      type: "input",
      message: "Please enter your credits for all contributors.",
      name: "contributions",
    },
    {
      type: "input",
      message: "Please enter test instructions for your project.",
      name: "tests",
    },
    {
      type: "list",
      message: "Please choose a license for your project.",
      name: "license",
      choices: ["Apache", "MIT", "ISC", "GNU GPLv3", "None"],
    },
    {
      type: "input",
      message: "Please enter your GitHub username.",
      name: "github",
    },
    {
      type: "input",
      message: "Please enter your email address.",
      name: "email",
    },
  ])
  .then((userInputs) =>
    fs.writeFile("README.md", createMarkdown(userInputs), (err) =>
      err ? console.log(err) : console.log("Success!")
    )
  );

const createMarkdown = ({
  projectTitle,
  description,
  installation,
  usage,
  contributions,
  tests,
  license,
  github,
  email,
}) => `
  # ${projectTitle}
  ## Description
  ${description}
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## Credits
  These are the people/organizations that have contributed to this project:
  ${contributions}
  ## Tests
  ${tests}
  ## License
  This application is using the ${license} license.
  ## Questions
  Please reach out to me with any questions.

  GitHub Username: ${github}
  
  Email: ${email}
  `;
