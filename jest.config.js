/** @type {import('@jest/types/build/Config').InitialOptions} */
module.exports = {
  displayName: "API",
  clearMocks: true,
  moduleFileExtensions: ["js", "ts"],
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/**/*.ts",
    "!**/*.d.ts",
    "!**/__tests__/**",
    "!<rootDir>/core/**",
  ],
};
