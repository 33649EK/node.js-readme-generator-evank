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
      choices: [
        "Apache",
        "MIT",
        "ISC",
        "GNU GPLv3",
        "BSD 3-Clause",
        "BSD 2-Clause",
        "Mozilla",
        "Creative Commons",
        "The Unlicense",
      ],
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
      err ? console.log(err) : console.log(userInputs, "Success!")
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
  My GitHub project

  GitHub: [${github}](https://github.com/${github})

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
    case "BSD 3-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
    case "BSD 2-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]";
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
    case "Creative Commons":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
  }
};
