/** @type {import('eslint').Linter.Config<import('eslint/rules/index').ESLintRules>} */

const config = {
    root: true,
    env: { browser: true, es2021: false },
    extends: [
      'airbnb',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint'],
    parserOptions: {
      warnOnUnsupportedTypeScriptVersion: false,
      ecmaVersion: 2020,
      ecmaFeatures: { jsx: true, modules: true },
      sourceType: 'module'
    },
    settings: {
      paths: ['client'],
      react: { version: '18' },
      'import/resolver': { node: { extensions: ['.js', '.jsx'] } }
    },
    rules: {
      // IGNORE (0)
      indent: 0,
      '@typescript-eslint/no-explicit-any': 0,
      'function-paren-newline': 0,
      'implicit-arrow-linebreak': 0,
      'import/no-extraneous-dependencies': 0,
      'import/no-unresolved': 0,
      'import/prefer-default-export': 0,
      'object-curly-newline': 0,
      'react/display-name': 0,
      'react/jsx-boolean-value': 0,
      'react/jsx-one-expression-per-line': 0,
      'react/no-array-index-key': 0,
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'react/require-default-props': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'jsx-a11y/label-has-associated-control': 0,
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'no-confusing-arrow': 0,
      'no-console': 0,
      'no-underscore-dangle': 0,
      // WARNS (1)
      'import/no-relative-packages': 1,
      'max-len': [1, { code: 140, tabWidth: 2 }],
      'react/button-has-type': 1,
      'react/destructuring-assignment': [1, 'always', { ignoreClassFields: true }],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/jsx-props-no-spreading': 1,
      'react/no-unused-prop-types': 1,
      'react/self-closing-comp': 1,
      'no-nested-ternary': 1,
      // ERRORS (2)
      strict: [2, 'never'],
      'no-implicit-coercion': 2,
      'import/extensions': [2, 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
      semi: [2, 'always'],
      'comma-dangle': [2, 'never'],
      'no-trailing-spaces': [2, { skipBlankLines: true }],
      'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
      'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: false }],
      'array-bracket-newline': [2, 'consistent'],
      quotes: [2, 'single', { avoidEscape: true }],
      'prefer-const': [2, { destructuring: 'all', ignoreReadBeforeAssign: true }],
      'no-param-reassign': [2, { props: false }],
      'react/function-component-definition': [2, { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
      'no-unused-vars': [2, { vars: 'all', args: 'none', ignoreRestSiblings: false }],
      'no-use-before-define': 2,
      'no-else-return': 2,
      'react/jsx-curly-brace-presence': [2, 'never'],
      'react/jsx-sort-props': 2,
      'react-hooks/rules-of-hooks': 2,
      'react-hooks/exhaustive-deps': 2,
      'react/jsx-uses-react': 2,
      'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
      'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }]
    }
  };
  module.exports = config;
