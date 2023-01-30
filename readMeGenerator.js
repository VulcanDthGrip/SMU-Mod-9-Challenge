function readMeGenerator(response) {
    var content = '# ${response.projectTitle}   

// Add project title here
${response.projectTitle}

// Add project description here
${response.projectDescription}

// Add installation instructions here
${response.installationInstructions}

// Add project usage here
${response.projectUsage}

// Add project contributions here
${response.projectContributions}

// Add test instructions here
${response.testInstructions}

// Add license selection here
${response.licenseSelection}

};

module.exports = readMeGenerator;







