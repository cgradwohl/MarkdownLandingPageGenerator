module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    strict: 0,
    "no-unused-vars": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
  extends: ["airbnb", "eslint:recommended", "plugin:react/recommended"],
  plugins: ["react"],
}
