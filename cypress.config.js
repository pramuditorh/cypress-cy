const {defineConfig}=require("cypress");

module.exports=defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true
  },
});
