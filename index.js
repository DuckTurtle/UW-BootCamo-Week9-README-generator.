// calls inquirer
const inquirer = require('inquirer');
//calls the gen markdown js file
const generateMarkdown = require('./utils/generateMarkdown.js');
// calls the file system.
const fs = require('fs');
// prompts user when called to get info
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter your Project Title:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description of your project:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter the notes needed for installation:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter your projects usage information:',
        },
        {
            type: 'input',
            name: 'alttext',
            message: 'Enter alt Text for your image:',
        },
        {
            type: 'input',
            name: 'image',
            message: 'Enter Image name and file tipe example: (image1.png):',
        },
        {
            type: 'list',
            name: 'licenseType',
            message: 'Select the license you want to use',
            choices: ['Mit', 'Apache2', 'GNU GPLv3', 'ISC', 'Mozilla', 'WTFPL']
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter how others may contribute:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter how others may test your project:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email adress:',
        }
    ])
};
// TODO: runs on oppen
function init() {
    questions()
        // sends the code to the other js file then creates readme.
        .then((answers) => {
            
            const generateReadme =  generateMarkdown(answers);
            console.log(generateReadme);
            fs.writeFile('README.md', generateReadme, (err) =>
                err ? console.log(err) : console.log('Successfully created README>MD'))
        })

}

// Function call to initialize app
init();
