// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseBadge;
  switch (data.license) {
    case "Apache 2.0":
      licenseBadge =
        "![badge](https://img.shields.io/badge/License-Apache_2.0-blue)";
      break;
    case "GNU 3.0":
      licenseBadge =
        "![badge](https://img.shields.io/badge/License-GNU_3.0-blue)";
      break;
    case "MIT":
      licenseBadge = "![badge](https://img.shields.io/badge/License-MIT-blue)";
      break;
    case "Mozilla":
      licenseBadge =
        "![badge](https://img.shields.io/badge/License-Mozilla-blue)";
      break;
    case "None":
      licenseBadge = "";
      break;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseLink;
  switch (data.license) {
    case "Apache 2.0":
      licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
      break;
    case "GNU 3.0":
      licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
      break;
    case "MIT":
      licenseLink = "https://choosealicense.com/licenses/mit/";
      break;
    case "Mozilla":
      licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
      break;
    case "None":
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === "None") return "";
  else {
    return;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //generates table of contents and adds elements with responses
  let tableOfContents = `\n### Table of Contents\n`;

  if (data.installation !== "") {
    tableOfContents += `\n* [Installation](#installation)\n`;
  }
  if (data.usage !== "") {
    tableOfContents += `\n* [Usage](#usage)\n`;
  }
  if (data.collaborators !== "") {
    tableOfContents += `\n* [Collaborators](#collaborators)\n`;
  }
  if (data.test !== "") {
    tableOfContents += `\n* [Tests](#tests)\n`;
  }
  if (data.license !== "None") {
    tableOfContents += `\n* [License](#license)\n`;
  }
  //generates markdown template
  let markdown = `# ${data.title}\n\n${renderLicenseBadge(data)}\n`;
  //adds description to template
  markdown += `\n## Description\n\n${data.description}\n`;
  //adds table of contents to template
  markdown += tableOfContents;
  //add each section to markdown template with a response
  if (data.installation) {
    markdown += `\n## Installation\n\n${data.installation}\n`;
  }
  if (data.usage) {
    markdown += `\n## Usage\n\n${data.usage}\n`;
  }
  if (data.collaborators) {
    markdown += `\n## Collaborators\n\n${data.collaborators}\n`;
  }
  if (data.test) {
    markdown += `\n## Tests\n\n${data.test}\n`;
  }
  if (data.license !== "None") {
    markdown += `\n## License\n\nThis project is licensed under the ${
      data.license
    } License.\n[Link](${renderLicenseLink(data)})\n`;
  }

  return markdown;
}

module.exports = generateMarkdown;
