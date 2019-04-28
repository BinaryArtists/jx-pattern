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
      },
    ],
    '@babel/typescript',
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
  ],
};
