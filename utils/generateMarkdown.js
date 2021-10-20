// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'GPL':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case 'ISC':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
      break;
    default:
      return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of contents
  
  ## Installation
  
  ${data.install}

  ## Usage
  
  ${data.usage}

  ## Contributing
  
  ${data.contribution}

  ## Tests
  
  ${data.tests}

  ## Questions
  Contact:
  Github: ${data.username}
  Email: ${data.email}
  ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = {
  generateMarkdown
};
