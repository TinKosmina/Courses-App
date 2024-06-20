import globals from "globals";
import pluginJs from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    rules: {
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          trailingComma: "es5",
          semi: true,
          jsxSingleQuote: true,
          singleQuote: true,
          useTabs: true,
          endOfLine: "auto",
          importOrder: [
            "^react(.*)$",
            "<THIRD_PARTY_MODULES>",
            "./types",
            "^[.](?!.*.(scss|css)$).*$",
            "(.*).(scss|css)$",
          ],
          importOrderSeparation: true,
          importOrderSortSpecifiers: true,
        },
      ],
      "@typescript-eslint/no-namespace": "off",
      "no-duplicate-imports": "error",
    },
  },
  pluginJs.configs.recommended,
  tsPlugin.configs.recommended,
  pluginReactConfig,
];
