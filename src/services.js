const cp=require('child_process');
const fs=require('fs');
const Mustache=require('mustache');

const testSvc=(req, res) => {
    res.send('Im testSvc');
};

const runCypressSvc=(req, res) => {
    try {
        cp.execSync('rm -rf cypress/results', {encoding: 'utf-8'});
        cp.execSync('rm output.json', {encoding: 'utf-8'});
        cp.execSync('npm run cy:run', {encoding: 'utf-8'});
    } catch(error) {
        console.log(error)
    } finally {
        cp.execSync('npx mochawesome-merge ./cypress/results/*.json -o output.json', {encoding: 'utf-8'});
    }

    res.send('Run Cypress Done');
};

const generateTemplate=() => {
    const templateFile=fs.readFileSync('./template.txt');
    const jsonFile=fs.readFileSync('./input.json');
    const jsonData=JSON.parse(jsonFile);
    const mustache=Mustache.render(templateFile.toString(), jsonData[0]);

    try {
        fs.writeFileSync('./cypress/e2e/generated.cy.js', mustache);
    } catch(error) {
        console.log(error);
    }
};

module.exports={testSvc, runCypressSvc, generateTemplate};