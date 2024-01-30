// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description for your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information of your project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can your project be tested?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['GNU AGPLv3', 'Apache 2.0', 'Mozilla Public', 'Boost Software', 'MIT']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

function generateContent(answers) {
    let licenseBadge = '';
    if (answers.license !== 'None') {
        licenseBadge = `License: ${answers.license}`;
    }
    return `# ${answers.title} ${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
If there are any questions, please contact me at [${answers.email}] or visit my GitHub profile: [${answers.github}]
`;
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('README Generated.');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateContent(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();