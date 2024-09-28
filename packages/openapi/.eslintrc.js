/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@pkrbt/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["coverage", "src/core/types.ts"],
};
