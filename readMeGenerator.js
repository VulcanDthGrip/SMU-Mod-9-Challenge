const fs = require('fs');
const inquirer = require('inquirer');
const { inherits } = require('util');
const index = require('./index');

function LicenseBadge(license) {
    if(license === 'MIT') {
        return '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
    } else if (license === 'Apache 2.0') {
        return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    } else if (license === 'GPL v3.0') {
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    } else {
      return license;
  }
}

  function LicenseLink(license) {
      if(license === 'MIT') {
        return 'https://choosealicense.com/licenses/mit/'
      } else if (license === 'Apache 2.0') {
        return 'http://www.apache.org/licenses/LICENSE-2.0'
      } else if (license === 'GPL v3.0') {
        return 'https://www.gnu.org/licenses'
      } else {
        return license
      }
  }

  function LicenseSection(license) {
    if(license === 'None') {
      return ''
    } else {
      return license
    }
  }

function readMeGenerator(response) {
return`


# SMU-Mod-9-Challenge - ReadMe Generator

## ${LicenseSection(response.license)} ${LicenseBadge(response.license)}
### ${LicenseLink(response.license)}

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
### ${response.emailAddress}`;

}
// exports
module.exports = readMeGenerator;