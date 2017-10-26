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

// Imagemin 
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var imagemin_input = './images/*.{svg,jpg}';
var imagemin_output = './images-imagemin/';
var imageminquant_in = './images/*.png';
var imageminquant_out = './images-imageminquant';

// gulp image 
var image = require('gulp-image');
var gulpimage_output = './images-gulpimage/';

var imageminPngquant = require('imagemin-pngquant');



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

// Image min saved 35.6KB - 14.7%
// JPG saved 11.3 KB - 7%
// png saved 19.7 KB - 27.1%
// svg saved 4.57 KB - 50.3%

gulp.task('image-min', function() {
  return gulp 
  .src(imagemin_input)
  .pipe(changed(imagemin_output))
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
  .pipe(gulp.dest(imagemin_output));
});

gulp.task('image-min-quant', ['image-min'], function() {
  return gulp 
  .src(imageminquant_in)
  .pipe(imagemin([imageminPngquant()], {verbose: true}))
  .pipe(gulp.dest(imagemin_output))
});

// Gulp Image 
// png saved 53.12KB (before 71.09 KB after 17.97 KB)
// svg saved 4.73KB (before 8.86KB after 4.14KB)
// Relies on external dependency for Jpeg, devdependencies out of date

gulp.task('image-gulp', function() {
  return gulp
  .src(imagemin_input)
  .pipe(changed(gulpimage_output))
  .pipe(image({
    pngquant: true,
    svgo: true
  }))
  .pipe(gulp.dest(gulpimage_output));
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
