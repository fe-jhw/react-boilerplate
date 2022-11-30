module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:import/recommended",
    "plugin:testing-library/react",
    "prettier",
  ],
  plugins: ["react", "react-hooks", "jsx-a11y", "import"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-console": "error",
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "semi": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
  overrides: [
    {
      files: ["**/__tests__/**/*", "**/*.{spec,test}.*"],
      env: {
        "jest/globals": true,
      },
      plugins: ["jest", "jest-dom", "testing-library"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
      ],
    },
  ],
};
