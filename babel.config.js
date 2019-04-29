// package.json
// babel.config.js
// packages/
//   mod/
//     package.json
//     .babelrc
//     index.js

// https://github.com/babel/babel-preset-env/blob/master/data/plugin-features.js

module.exports = {
  presets: [
    [
      '@babel/preset-env', // https://www.cnblogs.com/chyingp/p/understanding-babel-preset-env.html
      {
        targets: {
          // node: "8.9.3",
          // browsers: "ie 11" // https://github.com/browserslist/browserslist
        },
        loose: true,
        modules: false,
        // forceAllTransforms: process.env === "production"
      },
    ],
    '@babel/typescript',
    // '@babel/stage-2'
  ],
  plugins: [
    // "@babel/plugin-syntax-dynamic-import",
    // "@babel/transform-runtime",
    // "@babel/syntax-typescript",
    // // https://babeljs.io/docs/en/next/babel-plugin-transform-typescript.html#caveats
    // "@babel/transform-typescript",
    // "@babel/proposal-class-properties",
    // "@babel/proposal-object-rest-spread",
    // "@babel/proposal-optional-chaining"
    // // https://stackoverflow.com/questions/37251552/whats-the-difference-between-babel-preset-stage-0-babel-preset-stage-1-etc
    // Stage 2
    // [
    //   "@babel/plugin-proposal-decorators", { "legacy": true }
    // ],
    // "@babel/plugin-proposal-function-sent",
    // "@babel/plugin-proposal-export-namespace-from",
    // "@babel/plugin-proposal-numeric-separator",
    // "@babel/plugin-proposal-throw-expressions",
    // Stage 3
    // "@babel/plugin-syntax-dynamic-import",
    // "@babel/plugin-syntax-import-meta",
    // [
    //   "@babel/plugin-proposal-class-properties", { "loose": false }
    // ],
    // "@babel/plugin-proposal-json-strings"
  ],
};
