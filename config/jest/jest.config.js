const path = require("path")

const config = {
  transform: {
    "^.+\\.(js|jsx)$": [
      "babel-jest",
      { configFile: path.resolve(__dirname, "../babel/babel.config.js") },
    ],
  },
  rootDir: "../..",
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx}",
  ],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.js"],
  // modulePaths: [".yarn"],
}

module.exports = config
