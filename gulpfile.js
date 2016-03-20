'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sass_lint = require('gulp-sass-lint');
var eslint = require('gulp-eslint');

var styleInput = './css/sass/**/*.scss';
var styleOutput = './css/';

var scriptInput = './scripts/**/*.js';

var sass_options = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function () {
  return gulp
    .src(styleInput)
    .pipe(sass_lint())
    .pipe(sass_lint.format())
    .pipe(sass_lint.failOnError())
    .pipe(autoprefixer())
    .pipe(sass(sass_options).on('error', sass.logError))
    .pipe(gulp.dest(styleOutput));
});

// Linting config located in .sass-link.yml
gulp.task('lint-sass', function () {
  return gulp
    .src(styleInput)
    .pipe(sass_lint())
    .pipe(sass_lint.format())
    .pipe(sass_lint.failOnError())
});

// Linting config located in .eslintrc
gulp.task('lint-js', function () {
  return gulp
    .src(scriptInput)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
});

gulp.task('watch', function() {
  return gulp
    .watch(styleInput, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// Setup the default task order
gulp.task('default', ['sass',  'watch']);

// Setup link task
gulp.task('lint', ['lint-sass', 'lint-js']);
