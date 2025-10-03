/** jest.config.cjs */
module.exports = {
  transformIgnorePatterns: [
    "node_modules/(?!axios|axios-mock-adapter)"
  ],
  testEnvironment: "jsdom",
};
