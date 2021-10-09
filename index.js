const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const gen = require('gen.js');

const intro = [
    {
        type: 'confirm',
        prefix: '\b',
        name: 'intro',
        message: chalk.magenta(`Welcome to my README Generator`)
    },
];

const successMsg = chalk.greenBright(`The readme has been generated in the output folder!`);

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter a valid email address:',
        validate: function(value) {
            let valid = value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
            if (valid) {
                return true;
            } else {
                return 'Please enter a valid email address';
            }
        },

    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project:',
    },
    {
        type: 'confirm',
        name: 'installConf',
        message: 'Do you want to add installation instructions?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Add your installation instructions:',
    },
    {
        type: 'confirm',
        name: 'contribConf',
        message: 'Do you want to add contribution instructions?'
    },
    {
        type: 'input',
        name: 'contrib',
        message: 'Add how to contribute to your repo:',
    },
    {
        type: 'confirm',
        name: 'testConf',
        message: 'Do you want to add testing instructions?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Add your testing instructions:'
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Choose an open source license:',
        choices: ['example1', 'example2'],
    },
]

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log(successMsg)
    });
}

const start = async() => {
    try {
        await inquirer.prompt(intro);
        const data = await inquirer.prompt(questions);
        writeToFile('./output/README.md');
    } catch (err) {
        console.log(err);
    }
}

start();