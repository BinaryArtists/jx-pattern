// package.json
// babel.config.js
// packages/
//   mod/
//     package.json
//     .babelrc
//     index.js

module.exports = {
  presets: ['@babel/env', '@babel/typescript'],
  plugins: [
    // "@babel/plugin-syntax-dynamic-import",
    // "@babel/transform-runtime",
    // "@babel/syntax-typescript",
    // // https://babeljs.io/docs/en/next/babel-plugin-transform-typescript.html#caveats
    // "@babel/transform-typescript",
    // "@babel/proposal-class-properties",
    // "@babel/proposal-object-rest-spread",
    // "@babel/proposal-optional-chaining"
  ],
};
