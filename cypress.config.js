const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: 'https://rasmijati.com.np',
    // baseUrl: 'https://www.w3schools.com/',
    baseUrl: 'http://localhost:3000',
    viewportHeight: 550,
    viewportWidth: 660,
    experimentalStudio: true,
    // defaultCommandTimeout: 6000   //wait for 6 second

  },
});


require('@applitools/eyes-cypress')(module);
