const {
  ClassicRunner,
  RunnerOptions,
  Eyes,
  Target,
  BatchInfo,
} = require("@applitools/eyes-webdriverio");

let eyes;
let configuration;
let runner;

describe("Demo App - wdio6", function () {
  before(async () => {
    const runnerOptions = new RunnerOptions().testConcurrency(1);
    runner = new ClassicRunner(runnerOptions);
    eyes = new Eyes(runner);
    configuration = eyes.getConfiguration();
    configuration.setApiKey("1xePtLn104HtdZYkhkLhO7Deu38QNFTM7ULo14QX2IwyY110");
    // configuration.setBatch(new BatchInfo("Test"));
  });

  beforeEach(async function () {
    configuration.setAppName("Demo App - WDIO 6 - demo");
    configuration.setTestName("Smoke Test - WDIO 6 - demo");
    eyes.setConfiguration(configuration);
    browser = await eyes.open(browser);
  });

  it("first step", async () => {
    await browser.url("https://applitools.com/helloworld/");
    configuration.setBatch(new BatchInfo("Test"));
    const loginButton = await browser.$(".section.button-section > button");
    await loginButton.click();
    await eyes.check("Basic Window", Target.window().fully());
    await eyes.closeAsync();
  });
  it("second step", async () => {
    await browser.url("https://applitools.com/helloworld/");
  });

  afterEach(async () => {
    await eyes.abortAsync();
  });
});
