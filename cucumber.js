module.exports = {
  default: {
    require: [
      "hooks/**/*.ts",
      "step-definitions/**/*.ts"
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: [
      "@cucumber/pretty-formatter",
      "json:cucumber-report.json",
      "html:cucumber-report.html"
    ],
    formatOptions: {
      html: {
        output: "cucumber-report.html"
      }
    },
    worldParameters: {
      baseURL: "https://the-internet.herokuapp.com"
    }
  }
};