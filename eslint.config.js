const globals = require("globals");
const react = require("eslint-plugin-react");

module.exports = {
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
    },
  },
  plugins: { react },
  ignores: ["public/*", ".cache/*"],
};
