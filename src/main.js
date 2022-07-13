const cp=require('child_process');

try {
    cp.execSync('rm -rf cypress/results', {encoding: 'utf-8'});
    cp.execSync('rm output.json', {encoding: 'utf-8'});
    cp.execSync('npm run cy:run', {encoding: 'utf-8'});
} catch(error) {
    console.log(error)
} finally {
    cp.execSync('npx mochawesome-merge ./cypress/results/*.json -o output.json', {encoding: 'utf-8'});
}