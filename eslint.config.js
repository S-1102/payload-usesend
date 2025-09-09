import payloadEsLintConfig from '@payloadcms/eslint-config';

export default [
  {
    ignores: [
      '**/.temp',
      '**/.*',
      '**/.git',
      '**/.hg',
      '**/.pnp.*',
      '**/.svn',
      '**/playwright.config.ts',
      '**/*.spec.ts',
      '**/*.test.ts',
      '**/tsconfig.tsbuildinfo',
      '**/README.md',
      '**/eslint.config.js',
      '**/payload-types.ts',
      '**/dist/',
      '**/.yarn/',
      '**/build/',
      '**/node_modules/',
      '**/temp/',
      '**/*.cjs',
    ],
  },
  ...payloadEsLintConfig,
  {
    rules: {
      'no-restricted-exports': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'sort-keys': 'off',
      '@typescript-eslint/sort-type-keys': 'off',
      'perfectionist/sort-objects': 'off',
    },
  },
  {
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        projectService: {
          maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 40,
          allowDefaultProject: [
            'scripts/*.ts',
            '*.js',
            '*.mjs',
            '*.spec.ts',
            '*.test.ts',
            '*.d.ts',
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
