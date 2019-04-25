// Refer to mini-antui
// Doc use https://gist.github.com/jeromecoupe/0b807b0c1050647eb340360902c3203a

const del = require('del');
const path = require('path');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const gulpif = require('gulp-if');

const isProduction = process.env.NODE_ENV === 'production';
const dist = isProduction
  ? path.join(__dirname, '../dist')
  : path.join(__dirname, '../build');
const src = path.join(__dirname, '../src');
const babelConfigFilePath = path.join(__dirname, '../babel.config.js');

function scriptsLint() {
  return gulp
    .src([`${src}/**/*.js`, `${src}/**/*.ts`])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function scripts() {
  let opts = require(babelConfigFilePath);

  return gulp
    .src([`${src}/**/*.ts`])
    .pipe(babel(opts))
    .pipe(uglify())
    .pipe(minify())
    .pipe(gulp.dest(dist));
}

const build = gulp.series(scriptsLint, scripts);

exports.build = build;
exports.default = build;
