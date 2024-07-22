/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  moduleFileExtensions: ["ts", "tsx", "js", "tsx"],
  rootDir: "./src",
  roots: ["<rootDir>"],
  setupFiles: ["<rootDir>/setupTests.ts"],
  setupFilesAfterEnv: [],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {},
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
  verbose: true,
  watchPathIgnorePatterns: [],
  watchman: true,
};

export default config;
