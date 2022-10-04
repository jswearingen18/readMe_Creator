// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs")
// TODO: Create an array of questions for user input
const generateReadme = ({name, description, url, repo, badges, visuals, usage, support, roadmap, contributions, authors, license}) => 
`# ${name}

## Description
${description}

## Github URL link
${url}

## Github Repository link
${repo}

## Badges
${badges}

## Visuals
${visuals}

## Usage
${usage}

## Support
${support}

## Roadmap
${roadmap}

## Contributions
${contributions}

## Authors and acknowledgment
${authors}

## License
${license}`;

inquirer.prompt([
{
    name: "name",
    message: "What would you like the name of the program to be?",
    type: "input",
},
{
    name: "description",
    message: "Please give a description of the program.",
    type: "input",
},
{
    name: "url",
    message: "What is your Github URL link?",
    type: "input",
},
{
    name: "repo",
    message: "What is your Github Repository link?",
    type: "input",
},
{
    name: "badges",
    message: "Are their any badges you would like to add?",
    type: "input",
},
{
    name: "visuals",
    message: "Are their any visuals you would like to display?",
    type: "input",
},
{
    name: "usage",
    message: "What is the purpose of the program?",
    type: "input",
},
{
    name: "support",
    message: "Where can users find further support or help with program?",
    type: "input",
},
{
    name: "roadmap",
    message: "What is the roadmap for this program?",
    type: "input",
},
{
    name: "contributions",
    message: "List any contributions user will accept here.",
    type: "input",
},
{
    name: "authors",
    message: "Who are the authors of the program?",
    type: "input",
},
{
    name: "license",
    message: "How is it licensed?",
    type: "input",
}
])

// TODO: Create a function to write README file
.then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile("README.md", readmeContent, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md!")
    );
});

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
