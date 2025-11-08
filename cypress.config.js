const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true, 

    setupNodeEvents(on, config) {
      // aqui você adiciona listeners, se quiser
      return config
    },
  },
});
