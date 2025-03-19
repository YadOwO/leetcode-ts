module.exports = {
  /** 指定此配置为根级配置，eslint 不会继续向上层寻找 */
  root: true,
  extends: ['alloy', 'alloy/typescript'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.*?.json',
    createDefaultProgram: false,
  },
  /** 配置插件：强制导入排序 */
  plugins: ['simple-import-sort'],
  globals: {},
  settings: {},
  overrides: [
    {
      files: ['**/__tests__/**', '**/tests/**'],
    },
    {
      files: ['*.cjs'],
      rules: {
        /** 允许调用 require() */
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
  rules: {
    /** 允许在 通用类型或返回类型 之外的 void 类型（关闭原因：参数为函数时，void 为返回值校验有 BUG） */
    '@typescript-eslint/no-invalid-void-type': 'off',
    /** 允许对对象字面量进行类型断言 */
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' },
    ],
    /** 允许 _ 开头的参数不被使用 */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    /** 必须按规则排序 import */
    'simple-import-sort/imports': 'error',
    /** 必须按规则排序 export */
    'simple-import-sort/exports': 'error',
    /** 函数的参数禁止超过 6 个 */
    'max-params': ['error', 6],
    /** for in 内部可以没有 hasOwnProperty */
    'guard-for-in': 'off',
    /** 禁止函数的循环复杂度超过 26 */
    complexity: ['error', 26],
    /** 禁止校验箭头函数换行 */
    'implicit-arrow-linebreak': 'off',
    /** 允许对函数的参数重新赋值 */
    'no-param-reassign': 'off',
    /** symbol 描述可以为空 */
    'symbol-description': 'off',
    /** 允许使用 async 函数作为 Promise 的 executor */
    'no-async-promise-executor': 'off',
  },
};
