const cp=require('child_process');

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

module.exports={testSvc, runCypressSvc};