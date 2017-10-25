'use strict';

var postcss = require('gulp-postcss');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var sass_lint = require('gulp-sass-lint');
var eslint = require('gulp-eslint');

var style_input = './css/sass/**/*.scss';
var style_output = './css/';

var script_input = './scripts/**/*.js';

var sass_options = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var imagemin_input = './images/*';
var imagemin_output = './images-imagemin/';

gulp.task('sass', function () {
  var processors = [
    autoprefixer({browsers: ['last 2 version']}),
  ];
  return gulp
    .src(style_input)
    .pipe(sass_lint())
    .pipe(sass_lint.format())
    .pipe(sass_lint.failOnError())
    .pipe(sass(sass_options).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(style_output));
});

// Linting config located in .sass-link.yml
gulp.task('lint-sass', function () {
  return gulp
    .src(style_input)
    .pipe(sass_lint())
    .pipe(sass_lint.format())
    .pipe(sass_lint.failOnError())
});

// Linting config located in .eslintrc
gulp.task('lint-js', function () {
  return gulp
    .src(script_input)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
});

// Image min saved 28.8KB - 12%
// JPG saved 4.49 KB - 2.8%
// png saved 19.7 KB - 27.1%
// svg saved 4.57 KB - 50.3%

gulp.task('image-min', function() {
  return gulp 
  .src(imagemin_input)
  .pipe(changed(imagemin_output))
  .pipe(imagemin([
    imagemin.jpegtran(),
    imagemin.optipng(),
    imagemin.svgo({
      plugins: [
        {cleanupIDs: false}
      ]
    })
  ]))
  .pipe(gulp.dest(imagemin_output));
});

gulp.task('watch', function() {
  return gulp
    .watch(style_input, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// Setup the default task order
gulp.task('default', ['sass', 'watch']);

// Setup lint task
gulp.task('lint', ['lint-sass', 'lint-js']);
