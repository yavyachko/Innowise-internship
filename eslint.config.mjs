import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": ["warn", { endOfLine: "auto" }],
      "no-var": "error",
      "prefer-const": "warn",
      "no-console": "warn",
      "no-debugger": "warn",
    },
  },
  configPrettier,
  {
    files: ["webpack.config.js"],
    languageOptions: { globals: globals.node },
  },
];
