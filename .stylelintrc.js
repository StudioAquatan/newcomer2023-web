module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-idiomatic-order",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
  ],
  overrides: [
    {
      files: ["src/**/*.{ts,tsx}"],
      customSyntax: "@stylelint/postcss-css-in-js",
    },
  ],
  rules: {
    "string-quotes": ["double"],
  },
};
