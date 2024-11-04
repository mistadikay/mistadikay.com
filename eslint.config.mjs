import react from "eslint-plugin-react";
import globals from "globals";

export default [
  {
    ignores: ["public/*", ".cache/*"],
  },
  {
    plugins: {
      react,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 2018,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
];
