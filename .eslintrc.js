const jsExtensions = ['.js', '.json', '.mjs', '.es', '.node', '.jsx']
const tsExtensions = ['.ts', '.d.ts', '.tsx']
const extensions = [...jsExtensions, ...tsExtensions]

module.exports = {
  root: true,
  extends: [
    '@strv/eslint-config-react',
    '@strv/eslint-config-typescript',
    'prettier',
    'prettier/react'
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: { extensions },
      alias: {
        map: [['~root', './src'], ['~pages', './src/pages']],
        extensions
      }
    }
  },
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',

    // no-useless-constructor doens't handle constructor definitions in .d.ts files properly.
    // Instead we use `@typescript-eslint/no-useless-constructor` which does handle them properly.
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // import/named will fail when import typescript types from a library
    // e.g: `import { StyledComponent } from 'styled-components`.
    'import/named': 'off',

    // Typescript types and interfaces need to be exported directly when defined. These two rules
    // will complain about that.
    'import/group-exports': 'off',
    'import/exports-last': 'off'
  }
}
