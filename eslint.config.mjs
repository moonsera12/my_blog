import nextjs from '@next/eslint-plugin-next';

export default [
  {
    plugins: {
      '@next/next': nextjs
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'error'
    }
  }
];

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", {
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_",
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true
      }]
    }
  }
];

export default eslintConfig;
