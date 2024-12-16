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
          groups: [
            ['builtin', 'external'],
            ['internal'],
            ['sibling', 'parent'],
            ['index'],
            ['unknown'],
          ],
          pathGroups: [
            {
              pattern: '{.,..}/**/*.css',
              group: 'unknown',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/extensions': [
        'error',
        'always',
        {
          ts: 'never',
          tsx: 'never',
        },
      ],
      'no-duplicate-imports': ['error', { includeExports: true }],
      'no-restricted-imports': [
        'error',
        {
          patterns: ['@/features/*', '@/shared/*/*'],
        },
      ],
      'max-len': [
        'error',
        {
          code: 120,
          ignoreUrls: true,
          ignoreStrings: false,
          ignoreTemplateLiterals: false,
        },
      ],
    },
  },
  ...TSESLint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
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
