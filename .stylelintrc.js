module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-idiomatic-order",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
  ],
  overrides: [
    {
      files: ["./**/*.{ts,tsx}"],
      customSyntax: "@stylelint/postcss-css-in-js",
    },
  ],
  rules: {
    "string-quotes": ["double"],
    "function-name-case": null,
    "function-no-unknown": null,
  },
};
