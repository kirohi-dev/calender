module.exports = {
  root: true,
  env: {
    es6: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
      sourceType: "module"
  },
  extends: [
    "prettier",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "prettier"
  ],
  // add your custom rules here
  rules: {
    "import/no-unresolved": 0,
  }
};
