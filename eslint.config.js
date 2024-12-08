import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import { ESLint } from "eslint";
import * as tseslint from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended, // JS recommended rules
  {
    ...tseslint.configs.recommended, // TypeScript recommended rules
  },
  pluginReact.configs.recommended, // React plugin recommended rules
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Needed for Next.js projects or React 17+
      "react/prop-types": "off", // Disable prop-types rule if you're using TypeScript
    },
  },
];
