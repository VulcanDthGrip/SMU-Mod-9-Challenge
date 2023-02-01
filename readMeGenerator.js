const fs = require('fs');
const inquirer = require('inquirer');
const index = require('./index');


function readMeGenerator(response) {
return`

# Project 
## ${response.projectTitle}

# Description
## ${response.projectDescription}

# Installation
## ${response.projectInstallationInstructions}

# Project Usage
## ${response.projectUsage}

# Project Contributions
## ${response.projectContributions}

# Testing Instructions
## ${response.projectTestInstructions}

# License Info
## ${response.License}`;

}

// exports
module.exports = readMeGenerator;