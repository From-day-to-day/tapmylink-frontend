import globals from 'globals';
import TSESLint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      import: eslintPluginImport,
      react: pluginReact,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
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
