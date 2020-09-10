module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true
    },
    extends: 'airbnb',
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
    },
    plugins: [
      'react',
    ],
    rules: {
      "no-console": "off",
      "require-jsdoc":"off",
      "no-plusplus": "off",
      "max-len": "off",
      "linebreak-style":"off",
      "no-unused-vars":"off"
    },
  };
  
