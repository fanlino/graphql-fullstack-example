module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
      },
    ],
    'no-use-before-define': 'off',
    'linebreak-style': 'off',
    camelcase: 'warn',
    'max-classes-per-file': 'off',
    'calss-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-underscore-dangle': 0,
    // react
    'react/jsx-filename-extension': [2, { extenstions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 1,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // typescript
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^-' }],
  },
  ignorePatterns: ['generated/**/*.tsx'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
