const { table } = require("console");

const gen = (data) => {
    //getting open source licenses from https://opensource.org/licenses
    // and badge from https://shields.io/

    switch (data.license) {
        case 'Apache 2.0':
            licenseBadge = ``
            break;
        case 'BSD-2-Clause':
            licenseBadge = ``
            break;
        case 'BSD-3-Clause':
            licenseBadge = ``
            break;
        case 'GNU GPLv2.0':
            licenseBadge = ``
            break;
        case 'GNU GPLv3.0':
            licenseBadge = ``
            break;
        case 'MIT':
            licenseBadge = ``
            break;
        case 'Mozilla Public 2.0':
            licenseBadge = ``
            break;
        default:
            break;
    }

let tableOfContents = `\n## Table of Contents\n`
if (data.install) {
    tableOfContents += `* [Installation](#installation)\n`;
}
if (data.usage) {
    tableOfContents += `* [Usage](#usage)\n`;
}
if (data.contrib) {
    tableOfContents += `* [Contributing](#contributing)\n`;
}
if (data.test) {
    tableOfContents += `* [Testing](#testing)\n`;
}
tableOfContents += `* [License](#license)\n`;
tableOfContents += `* [Questions](#questions)\n`;

//year for license
const year = new Date();

let 
}