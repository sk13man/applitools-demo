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

  logLevel: "silent",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryCount: 3,
  services: [
    [
      "chromedriver",
      "applitools",
      {
        key: "1xePtLn104HtdZYkhkLhO7Deu38QNFTM7ULo14QX2IwyY110", // can be passed here or via environment variable `APPLITOOLS_KEY`
        viewport: {
          width: 1920,
          height: 1080,
        },
      },
    ],
  ],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  before: function (capabilities, specs) {
    browser.setWindowSize(1800, 2000); // <-- this command
  },
};
