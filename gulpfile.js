'use strict'

const postcss = require('gulp-postcss');
const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const standard = require('gulp-semistandard');
const imagemin = require('gulp-imagemin');
const gulpStylelint = require('gulp-stylelint');

const styleInput = './css/src/**/*.scss';
const styleOutput = './css/';

const scriptInput = './scripts/src/**/*.js';
const scriptOutput = './scripts/';

const imageInput = './images/src/*';
const imageOutput = './images/';

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// Lint source styles through sass-lint
function lintStyles() {
  return gulp
    .src(styleInput, { since: gulp.lastRun(lintStyles) })
    .pipe(gulpStylelint({
      fix: true,
      failAfterError: false,
      reporters: [
        { formatter: 'string', console: true }
      ]
    }))
    .pipe(gulp.dest('./css/src/'));
}

// Compile styles with autoprefixer
function styles() {
  const processors = [
    autoprefixer()
  ]
  return gulp
    .src(styleInput)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(styleOutput)
  );
}

// Lint source scripts with standard
function lintScripts() {
  return gulp
    .src(scriptInput)
    .pipe(standard())
    .pipe(standard.reporter('default', {
      showFilePath: true,
      quiet: true
    })
  );
}

// Compile scripts with babel for backwards compatibility
function scripts() {
  return gulp
    .src(scriptInput)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(scriptOutput)
  );
}

// Compress all images using imagemin
function images() {
  return gulp
    .src(imageInput)
    .pipe(imagemin())
    .pipe(gulp.dest(imageOutput)
  );
}

function watchAssets() {
  // Watch styles
  gulp.watch(styleInput, gulp.series(lintStyles, styles));
  // Watch scripts
  gulp.watch(scriptInput, gulp.series(lintScripts, scripts));
  // Watch images
  gulp.watch(imageInput, gulp.series(images));
}

// Lint and compile scripts only
const js = gulp.series(lintScripts, scripts);
// Lint and compile styles only
const css = gulp.series(lintStyles, styles);
// Lint styles and scripts then compile styles, scripts and images
const build = gulp.series(lintStyles, lintScripts, gulp.parallel(styles, scripts, images));
// As above but then watch for changes in styles, scripts and images
const watch = gulp.series(build, gulp.parallel(watchAssets));

// Export private tasks to public gulp functions e.g. `gulp watch`
exports.js = js;
exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = watch;