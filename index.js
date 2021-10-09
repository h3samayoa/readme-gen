const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const gen = require('./gen.js');

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
        when: function (ans) {
            return ans.install;
        },
    },
    {
        type: 'confirm',
        name: 'usageConf',
        message: 'Do you want to add usage information?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Add your usage information:',
        when: function (ans) {
            return ans.usage;
        },
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
        when: function (ans) {
            return ans.contrib;
        },
    },
    {
        type: 'confirm',
        name: 'testConf',
        message: 'Do you want to add testing instructions?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Add your testing instructions:',
        when: function (ans) {
            return ans.test;
        },
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Choose an open source license:',
        choices: ['Apache 2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0'],
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
        writeToFile('./output/README.md', gen(data));
    } catch (err) {
        console.log(err);
    }
}

start();