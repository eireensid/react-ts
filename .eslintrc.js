module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'max-len': ['error', {
      ignoreComments: true,
      code: 100
    }]
  },
  globals: {
    __IS_DEV__: true
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off'
    }
  }]
};