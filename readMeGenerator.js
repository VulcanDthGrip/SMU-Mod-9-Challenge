const fs = require('fs');
const inquirer = require('inquirer');
const index = require('./index');

function renderLicenseBadge(license) {
    let badge = '';
    if(license === 'MIT') {
        badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
    } else if (license === 'Apache 2.0') {
        badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    } else if (license === 'GPL v3.0') {
        badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    } else {
      badge = ""
    }
    return badge;
  }

  function renderLicenseLink(license) {
    let licenseLink = '';
      if(license === 'MIT') {
        licenseLink = 'https://choosealicense.com/licenses/mit/'
      } else if (license === 'Apache 2.0') {
        licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
      } else if (license === 'GPL v3.0') {
        licenseLink = 'https://www.gnu.org/licenses'
      } else {
        licenseLink = ""
      }
      return licenseLink;
  }

  function renderLicenseSection(license) {
    let licenseSection = ''
    if(license === 'None') {
      licenseSection = ''
    } else {
      licenseSection =
      `License: ${license} `
    }
    return licenseSection;
  }

function readMeGenerator(response) {
return`


# SMU-Mod-9-Challenge - ReadMe Generator

## ${renderLicenseSection(response.license)} ${renderLicenseBadge(response.license)}
### ${renderLicenseLink(response.license)}

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
### ${response.projectTitle}

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

## License Information
### ${response.license}`;

}

// exports
module.exports = readMeGenerator;