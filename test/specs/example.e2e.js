const {
  ClassicRunner,
  RunnerOptions,
  Eyes,
  Target,
  By,
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
  });

  beforeEach(async function () {
    configuration.setAppName("Test");
    configuration.setTestName("Test");
    eyes.setConfiguration(configuration);
    browser = await eyes.open(browser);
  });

  it("first step", async () => {
    await browser.url("https://applitools.com/helloworld/");
    const loginButton = await browser.$(".section.button-section > button");
    await eyes.checkWindow("Before mouse click");
    await loginButton.click();
    await eyes.checkWindow("After mouse click");
    await eyes.closeAsync();
  });
  it("second step", async () => {
    await browser.url("https://applitools.com/helloworld/?diff1");
    const loginButton = await browser.$(".section.button-section > button");
    await eyes.check(
      "Before mouse click",
      Target.window().ignore(
        By.cssSelector(".section p:nth-of-type(4),  .section p a")
      )
    );
    await loginButton.click();
    await eyes.check(
      "After mouse click",
      Target.window().ignore(
        By.cssSelector(".section p:nth-of-type(4),  .section p a")
      )
    );
    await eyes.closeAsync();
  });

  afterEach(async () => {
    await eyes.abortAsync();
  });
});
