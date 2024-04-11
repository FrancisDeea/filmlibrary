module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // modify browser launch arguments
  // https://on.cypress.io/browser-launch-api
  on("before:browser:launch", (browser = {}, args) => {
    console.log("browser", browser);

    if (browser.family === "firefox") {
      console.log("adding dark mode browser flags");
      args.push("--force-light-mode=true");

      return args;
    }
  });
};
