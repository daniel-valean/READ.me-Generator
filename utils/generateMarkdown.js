// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (
    license === "MIT"
  ) {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } 
  else if (
    license === "Apache" ){
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if (
      license === "Mozilla" ){
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      }
      else if (
        license === "GNU" ){
          return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (
    license === "MIT"
  ) {
    return `https://choosealicense.com/licenses/mit/`
  } 
  else if (
    license === "Apache" ){
      return `https://www.apache.org/licenses/LICENSE-2.0`
    }
    else if (
      license === "Mozilla" ){
        return `https://www.mozilla.org/en-US/MPL/`
      }
      else if (
        license === "GNU" ){
          return `https://www.gnu.org/licenses/licenses.en.html`
        }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This is licensed under ${license}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge (data.license)}
  ${renderLicenseLink (data.license)}

## Description
${data.description},

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

## Installation 
${data.installation},

## Usage 
${data.usage},

## Contributing
${data.contributing},

## Tests 
* Tests for application and how to run it *
${data.tests},

## License 
This is licensed under ${data.license}

## Questions 
For any questions, please contact me with the information below:

GitHub: https://github.com/daniel-valean
`;
}

module.exports = generateMarkdown;

// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions