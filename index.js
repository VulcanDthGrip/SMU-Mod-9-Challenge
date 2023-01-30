var inquirer = require('inquirer');
var fs =  require('fs');
var readMeGenerator = require("./readMeGenerator");

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

// Function to generate ReadMe file
inquirer.createPromptModule(questions).then(function (response) {
    console.log(response);

    var content = readMeGenerator(response);
    console.log(content);
    fs.writeFile("./README.md", content, function(err) {
        if (err) throw err
        console.log("success");
    });
} );