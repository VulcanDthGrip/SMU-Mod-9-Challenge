const fs = require('fs');
const inquirer = require('inquirer');
const index = require('./index');


function readMeGenerator(response) {
return`

// Add project title here
# ${response.projectTitle}

// Add project description here

## ${response.projectDescription}

// Add installation instructions here

## ${response.installationInstructions}

// Add project usage here

## ${response.projectUsage}

// Add project contributions here

## ${response.projectContributions}

// Add test instructions here

## ${response.testInstructions}

// Add license selection here

## ${response.licenseSelection}`;

}

// exports
module.exports = readMeGenerator;