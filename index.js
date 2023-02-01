const inquirer = require('inquirer');
const fs =  require('fs');
const readMeGenerator = require('./readMeGenerator');

let questions = [
{
    // Display this input as the title of the readme file
    type: "input",
    message: "What is your project title?",
    name: "projectTitle",
},
{
    type: "input",
    message: "Provide a description for your project",
    name: "projectDescription",
},
{
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "projectInstallationInstructions",
},
{
    type: "input",
    message: "What is the usage information for this project?",
    name: "projectUsage"
},
{
    type: "input",
    message: "What are the contribution guidelines for this project?",
    name: "projectContributions"

},
{
    type: "input",
    message: "What are the test instructions for this project?",
    name: "projectTestInstructions"
},
{
    type: "list",  
    name: "License:",
    message: "What is the license for this project?",
    choices: [
        "Apache License 2.0",
        "BSD 3",
        "GVL-GPL 3.0",
        "MIT",
        "None"
    ],
}
];

// function to write readme file
const writeReadme = fileCreate => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedReadme.md', fileCreate, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};        
        
// Function to run program
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
    
        var fileCreate = readMeGenerator(data);
        console.log(typeof fileCreate);
        writeReadme(fileCreate)  
});
}
init();

// Exports
module.exports = questions;