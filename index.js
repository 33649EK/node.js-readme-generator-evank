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
  # ${projectTitle} ${licenseBadge(license)}
  
  ${description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [Tests](#tests)
  [License](#license)
  [Questions](#questions)

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
  Please reach out to me with any questions that you may have.

  GitHub Username: ${github}

  Email: ${email}
  `;

const licenseBadge = (license) => {
  switch (license) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    default:
      return "";
  }
};
