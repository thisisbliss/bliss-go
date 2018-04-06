'use strict'

var postcss = require('gulp-postcss')
var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('autoprefixer')
var sassLint = require('gulp-sass-lint')
var babel = require('gulp-babel')
var sourcemaps = require('gulp-sourcemaps')
var standard = require('gulp-semistandard')

var styleInput = './css/src/**/*.scss'
var styleOutput = './css/'

var scriptInput = './scripts/src/**/*.js'
var scriptOutput = './scripts/'

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
}

gulp.task('sass', ['lint-sass'], function () {
  var processors = [
    autoprefixer({browsers: ['last 2 version']})
  ]
  return gulp
    .src(styleInput)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(styleOutput))
})

gulp.task('scripts', ['lint-scripts'], function () {
  gulp.src(scriptInput)
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(scriptOutput))
})

// Linting config located in .sass-link.yml
gulp.task('lint-sass', function () {
  return gulp
    .src(styleInput)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
})

gulp.task('lint-scripts', function () {
  return gulp.src(scriptInput)
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
})

gulp.task('watch:sass', ['sass'], function () {
  return gulp
    .watch(styleInput, ['sass'])
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
    })
})

gulp.task('watch:scripts', ['scripts'], function () {
  return gulp
    .watch(scriptInput, ['scripts'])
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
    })
})

// Watch for changes
gulp.task('watch', ['watch:sass', 'watch:scripts'])

// Build dist output
gulp.task('build', ['sass', 'scripts'])

// Setup lint task
// TODO: Remove this and have it as part of the sass build
// process the same was JS linting is part of the bundling process?
gulp.task('lint', ['lint-sass', 'lint-scripts'])

// Default task will be the watch task for ease of use
gulp.task('default', ['watch'])
