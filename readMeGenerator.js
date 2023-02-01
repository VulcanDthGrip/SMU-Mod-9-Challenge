const fs = require('fs');
const inquirer = require('inquirer');
const index = require('./index');


function readMeGenerator(response) {
return`

## Table of Contents
### * [Project](#Project)
### * [Description](#Description)
### * [Installation](#Installation)
### * [Project Usage](#ProjectUsage)
### * [Project Contributions](#ProjectContributions)
### * [Testing Instructions](#TestingInstructions)
### * [Github Info](#GithubAccount)
### * [Email Address](#EmailAddress)
### * [License Info](#License)



## Project 
## ${response.projectTitle}

## Description
### ${response.projectDescription}

## Installation
### ${response.projectInstallationInstructions}

## Project Usage
### ${response.projectUsage}

## Project Contributions
### ${response.projectContributions}

## Testing Instructions
### ${response.projectTestInstructions}

## Github Repository Information
### ${response.githubAccount}

## Email Address
### ${response.emailAddress}

## License Info
### ${response.License}`;

}

// exports
module.exports = readMeGenerator;