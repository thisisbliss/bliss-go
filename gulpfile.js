'use strict';

var postcss = require('gulp-postcss');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var sass_lint = require('gulp-sass-lint');
var eslint = require('gulp-eslint');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');

var style_input = './css/sass/**/*.scss';
var style_output = './css/';

var script_input = './scripts/**/*.js';

var image_input = './images/*.{svg,jpg}';
var image_input_png = './images/*.png';
// var image_output = './images/';
var image_output = './images/imageminpngquant/';

var sass_options = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

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

// Run this task to compress images
gulp.task('image-jpeg-svg', function() {
  return gulp 
  .src(image_input)
  .pipe(imagemin([
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo({
      plugins: [
        {cleanupIDs: false}
      ]
    })
  ],
  {
    verbose: true
  }))
  .pipe(gulp.dest(image_output));
});

gulp.task('image', ['image-jpeg-svg'], function() {
  return gulp 
  .src(image_input_png)
  .pipe(imagemin([imageminPngquant()], {verbose: true}))
  .pipe(gulp.dest(image_output))
});

gulp.task('watch', function() {
  return gulp
    .watch(style_input, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// Setup the default task order
gulp.task('default', ['image', 'sass', 'watch']);

// Setup lint task
gulp.task('lint', ['lint-sass', 'lint-js']);
