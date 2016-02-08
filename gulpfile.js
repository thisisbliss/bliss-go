'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sass_lint = require('gulp-sass-lint');

var input = './css/sass/**/*.scss';
var output = './css/';

var sass_options = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sass_lint())
    .pipe(sass_lint.format())
    .pipe(sass_lint.failOnError())
    .pipe(autoprefixer())
    .pipe(sass(sass_options).on('error', sass.logError))
    .pipe(gulp.dest(output));
});

// Linting config located in .sass-link.yml
gulp.task('lint-sass', function () {
  return gulp
    .src(input)
    .pipe(sass_lint())
    .pipe(sass_lint.format())
    .pipe(sass_lint.failOnError())
});

gulp.task('watch', function() {
  return gulp
    .watch(input, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// Setup the default task order
gulp.task('default', ['sass', 'watch']);
