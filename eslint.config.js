module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        document: "readonly",
        alert: "readonly",
        confirm: "readonly",
        prompt: "readonly",
        module: "readonly",
        require: "readonly",
        fetch: "readonly",
        setInterval: "readonly"
      }
    },
    rules: {
      semi: "error",
      "no-unused-vars": "off",
      "no-undef": "off"
    }
  },
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly"
      }
    }
  }
];