exports.config = {
  //
  specs: ["./test/specs/**/*.js"],
  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
  ],

  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryCount: 3,
  services: [["chromedriver", "applitools"]],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  before: function (capabilities, specs) {
    browser.setWindowSize(1280, 960);
  },
};
