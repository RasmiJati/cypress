const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: 'https://rasmijati.com.np',
    baseUrl: 'https://www.w3schools.com/',
    viewportHeight: 550,
    viewportWidth:660,
    experimentalStudio: true

  },
});
