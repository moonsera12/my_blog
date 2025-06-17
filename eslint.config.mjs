export default [
  {
    extends: [
      'next/core-web-vitals'
    ]
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
