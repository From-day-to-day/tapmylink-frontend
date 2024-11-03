import globals from 'globals';
import TSESLint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{ts,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  ...TSESLint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
