module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-native",
    "@typescript-eslint"
  ],
  rules: {
    // allow .js files to contain JSX code
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".tsx", ".ts"] }],

    // prevent eslint to complain about the "styles" variable being used before it was defined
    "no-use-before-define": ["error", { "variables": false }],

    // ignore errors for the react-navigation package
    "react/prop-types": ["error", { "ignore": ["navigation", "navigation.navigate"] }],

    "react/react-in-jsx-scope": "off",
  },
  ignorePatterns: ["node_modules/"]
}