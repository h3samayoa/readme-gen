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

let readme = `# ${data.title}\n`;

readme += `\n${licenseBadge}\n\n---\n`;

readme += `\n## Description\n${data.description}\n`;

readme += tableOfContents;

if (data.install) {
    readme += `\n## Installation\n${data.installConf}\n`;
}

if (data.usage) {
    readme += `\n## Usage\n${data.usageConf}\n`;
}

if (data.contrib) {
    readme += `\n## Contributing\n${data.contribConf}\n`;
}
if (data.test) {
    readme += `\n## Testing\n${data.testConf}\n`;
}

readme += `\n## License \nLicensed under the ${data.license} License. Copyright \u00A9 ${year.getFullYear()}\n`;

readme += `\n## Questions\n*Contact me here for any questions \n\nGithub: [@${data.github}](https://github.com/${data.github}/)\n\nEmail: [${data.email}](mailto:${data.email})\n`

return readme;
}

module.exports = gen;