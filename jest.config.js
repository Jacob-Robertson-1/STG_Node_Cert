// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  testTimeout: 30000,
  testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"]
};
